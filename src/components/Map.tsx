import "../components/Map.css"
import "leaflet/dist/leaflet.css";
import L, { } from 'leaflet';
import { useEffect, useState } from "react";
import ModalObjectAdd from "./ModalObjectAdd";
import { CreateTypes } from "./ReviewPage";
import ObjectPopup from "./ObjectPopup";
import ReactDOMServer from 'react-dom/server'
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

var BusyIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAZMaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjA3KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjA3KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyYmIxOGM0OC1mYzgzLTljNDgtYTUxYi01NjQ3OTQ1ZmIwNDkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplZDUwYzI0ZC1kNDdlLWFmNDAtODNiYi1mNzdhODgxNzFkODkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYzM2OGUyZC0xYTNiLTM2NGUtODQxNS1lNzA3NzY0ODc3MzQiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5EQTIwMTYzMEUxMUJGNUU4RTYzMEY2NkFGN0U3RUQ3RTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFjMzY4ZTJkLTFhM2ItMzY0ZS04NDE1LWU3MDc3NjQ4NzczNCIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0wNVQxOTozNjoxMCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyYmIxOGM0OC1mYzgzLTljNDgtYTUxYi01NjQ3OTQ1ZmIwNDkiIHN0RXZ0OndoZW49IjIwMjEtMDUtMDVUMTk6NDA6MDcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7+AZchAAACVUlEQVRYhbXXO4wNURjA8d9O7ioQGyJxKxKvApWWgkJCsRJKCio1UXqESMQj2UgUQsWGRGHjHQpRkUU2yJKVjddqFonNssRzPYozVyb37tyZuca/ufee8535nzvnfHO+aRuas0QTZmENVmFx/Lsd3zGCftzANbxJu0hbimQ6tmILqs1mEfMWJ9CF93kkq3EU83NcvJ6n2IarycaoLmgDLrYogAU4j41pkrU4hUktCmq04yQ66yVVHEflHwU1KsIaVZOSvfItcBGq8XW1Dc1ZMhsDmFKyBD5jUQXrCwhu4gXmYoXGjVPPZKyrxMFZjGIzLiXaVuMMZmSMXREJ2y6L7XUCuB63Z7EwQkdG0AdcTum7Evc3Y1rWPS2FCJ8yYjokEquOtbLvxMcIwzkmc0jYhUk6cTDH2OGKkCMrMwJnoge38QzzsDyHAAYi3MsZDMuwqYAAeiP0CofQ/+Ab7kR4Lpxw/4P7eBnhl8ZEK4uL+F3LkwsYL1nwQzz5muQR7pYsuYUnSQl0lyw5WfuSlPTgXUmC18ISNEhGhEd3GXRjbCIJHPPvOfNFON//Ui8ZlPibLXJJOD1TJXBYyJ1WGMeB+saJJH3CYdQKPXiYRwL78LOgYBz7J+pIk/QJ5WYRzkl5BjY7fvcKj4Y8fMGetM5mksfy581pYWcWlhBmN5YRMyplLfJKXuFIRkwXhpoFpL1pJZmKByZ+ZxnEUqHmTSVP3fUJu1L6dmQJ8krgrMYq8pqQfJkUqSB34mv8/St25x1YRNIvFHniz768A4u+vnUJhV1XkUF/AK41e2sJTo4qAAAAAElFTkSuQmCC'
})

var FreeIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAZMaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjM1KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjM1KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjODJmYmU5Yy1hNjM1LTA0NDItOTg5Mi02ODYzOGI1NzA2ZjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYzY1NTM5MS04ODNjLWY1NDMtOWJhNC1mOWYxYTRmOGQzOWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZTA4YWY2Mi02ZmI4LTFmNDEtOTI5My1iNGE2ZjMxYzFiOGQiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5EQTIwMTYzMEUxMUJGNUU4RTYzMEY2NkFGN0U3RUQ3RTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZlMDhhZjYyLTZmYjgtMWY0MS05MjkzLWI0YTZmMzFjMWI4ZCIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0wNVQxOTozNjoxMCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjODJmYmU5Yy1hNjM1LTA0NDItOTg5Mi02ODYzOGI1NzA2ZjMiIHN0RXZ0OndoZW49IjIwMjEtMDUtMDVUMTk6NDA6MzUrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7T5wAxAAACyUlEQVRYhbXXz6tWRRzH8deMjy0KkkK4t01Bppv6D2phi8CQK9SihQa5ai24TEUJohQu7aK7Uklo0cW0wBbRqrDkInETRchfG/tBYj8ktW5OiznHO577nOece338wOHM+X6/M+8zM+c7Mye8tv9XIzSReBkvkZ7FBFbjH1wjzOPLEJzAzwEhLFaOIT8PIKHwSTyGHXgTk9naiBCewHOkrSn5hTAjmE7J73XkHUTEVFSrrk04hT2LgKZCoxwmSLtTSqdSsvlum4k7KYNKbcUxPDO88VEKsJ50NCXbypcvIVtwCA8tH1CCwmrSwZRMpYpSQybxoWqO7l9hQJqRTJY92ad1/FesyZTbFfEkto0ZIA9del3y1ACv4pGeNb/CRTyNjZZ+OE3Qw4lXBlVwl65jO44Xtk04gsc76m6MWN8DsrMBgC8qe5c2RKzpCPoDn7X4Pq/8o/Rox5iORxE3OmLWYKrFt0X3SPwVcbXHy+yXv8JSU3ivR92rA5zFix2BazGLb/Aj1uGFHgA4G+UVt6+exxvLAMDJiJPyJvQgdBvfRlzA/AOCnMalKG9gzUQbl44h1XnyKRbGDPhX9fI15Ad8N2bI1zhXQuDwmCEH60IJmcVvYwL8JE/BEsg1eekehw7jz2EQ+MD958xNzJSGJuS8opsr1HF592yFwAE5d1aiBbzbNA6DzMmb0Uo0i+9LQ2iBwNv4b5mABbwzzNEGmcPRZUI+0VgD6xPzqO13n7w09NFN7B3qCaMhZ/TPm4/kL7Ns+666DhJ7FUnVousacxGKwqiJr3UF73fETOPyMAD5T6vPkeiAvK8P0/kKMlR9Jr7WDexu8b2Fv5uN1sMUAjGEXhD42NJT5Ak5+VoB9RWD3tqFW1X5lvxPmRtsBQSxnpN7Ats1Lx/yVPe5e+o0AXIPYmSQ/1UaXV40NTWNdaGc7LB4a/ZgVWRVDP4HSv6kPExN+3IAAAAASUVORK5CYII='
})

var InactiveIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAZMaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjUyKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjUyKzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3YTgwMzc0NS1kMDIzLThjNGQtODI4NC0wZGM3MWU5NjY3YTciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MTQ5ZDg5Ni0yNGQ3LTNkNDItYWI2Yy03MmY2MzE2NjUwMjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMTgwNjFiZi04YzViLTk1NDgtYThjOS02YTg2MTJkMTUxOWEiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5EQTIwMTYzMEUxMUJGNUU4RTYzMEY2NkFGN0U3RUQ3RTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmMxODA2MWJmLThjNWItOTU0OC1hOGM5LTZhODYxMmQxNTE5YSIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0wNVQxOTozNjoxMCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YTgwMzc0NS1kMDIzLThjNGQtODI4NC0wZGM3MWU5NjY3YTciIHN0RXZ0OndoZW49IjIwMjEtMDUtMDVUMTk6NDA6NTIrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6A1Zc3AAACT0lEQVRYhbXXuWsVQRzA8Y/Li4WCogjGRsGr0f9Ai1gIEUlAyyhoZS1YeqAI4gHBTrSKQUHQoIlCLMRK8SCIRIkEPBsPULyCZzyK2SfL5u3b3efm27zdmd/sd9/M/GZmZ1w4f14TFmID1mNVfN+GH3iHUVzDMF5nPaSWUT4PO7ED7Rkxi7AaPXiDU+jFh3Rg1KBxJ+5iXxNBmoXYG7fbmCfpwSCWF3x4mhW4iC1Zkm6cxswWBXXa0IeutKQdJ2WPUVlqwhi1JyUHFO//orTHzxVhsVQfVshWLKlhM2YXbHQdT7EUHRrPziSzsKkWB+fxHtsxlCjrxFnMz2nbEQnTLo9dKQFcjcvzWBlhbk7QR1zOqLsS1zdjTl6fVkKEiZyYuRKJlaJbfk98jvCywMscFWZhki4cKdD2ZQ1jWJcTuAADuInHWIa1BQQwFgkrZ1HWYFsJAdyKcEvYhKaD77gd4Ymww00H9/Aswm9TE60qBvGnnieXMFmx4Kf45euSB7hTseQGHiUl0F+xpK9+kZQM4G1FglfCEEyRvBOW7irox6dGEjjh/3Pmq7C//yMtGZf4my0yJOyemRI4JuROK0zicLqwkWRE2IxaYQD3i0jgIH6VFEziUKOKLMmIcNwswwUZa2Cz7feAsDQU4Sv2Z1U2kzxUPG/OCDOztITwdp9yYt7LGIuikhc4nhPTi+f/IyHkzeOMuvFY0pQikgnhK6oRu/GlCgmcM/UUOSwkXy5lTpB78C2+/iZ8UxaijGRUOOSJf0eKNiz7+dYrHOxyBzvJX5Pgdy8lcOgMAAAAAElFTkSuQmCC'
})

// function onMapClick(e: any) {
//     $("#" + CreateTypes.ModalObjectAdd).modal('show')
// }
function onMapClick(e: any) {
    // setX(e.latlng.lat)
    // setY(e.latlng.lng)

    $("#" + CreateTypes.ModalObjectAdd).modal('show')

}
export let map: any;

function Map() {
    const { error, loading, detectedObjects } = useTypedSelector(state => state.detectedObjects)
    const [count, setCount] = useState(0);
    const { fetchDetectedObjects } = useActions()
    useEffect(() => {
        fetchDetectedObjects()
        if (map !== undefined) { map.remove(); }
        console.log("debug");
        console.log(detectedObjects);
        map = L.map('mapid').setView([53.0676, 33.3438], 8);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        if (detectedObjects != null && detectedObjects.length !== 0) {
            detectedObjects.forEach(detectedObject => {
                if (detectedObject.missionId == null && detectedObject.isDesired === false) {
                    return L.marker([parseFloat(detectedObject.x), parseFloat(detectedObject.y)], {
                        icon: FreeIcon,
                        draggable: true,
                    }).addTo(map).bindPopup(ReactDOMServer.renderToString(<ObjectPopup id={detectedObject.id} name={detectedObject.title} description={detectedObject.description} img={detectedObject.image.path} x={detectedObject.x} y={detectedObject.y} />));
                }
            });
        } else {
            setCount(count + 1)
        }


        // BusyPoints.points.forEach(element => {
        //     return L.marker([parseFloat(element.x), parseFloat(element.y)], {
        //         icon: BusyIcon,
        //         draggable: true,
        //     }).addTo(map).bindPopup(ReactDOMServer.renderToString(<ObjectPopup id={element.id} name={element.name} description={element.description} img={element.img} x={element.x} y={element.y} />));
        // });

        // InactivePoints.points.forEach(element => {
        //     return L.marker([parseFloat(element.x), parseFloat(element.y)], {
        //         icon: InactiveIcon,
        //         draggable: true,
        //     }).addTo(map).bindPopup(ReactDOMServer.renderToString(<ObjectPopup id={element.id} name={element.name} description={element.description} img={element.img} x={element.x} y={element.y} />));
        // });



        map.on('dblclick', onMapClick);

    }, []);


    return (
        <>
            <div id="mapid" style={{ height: "100%" }}>
            </div>
            <ModalObjectAdd x={1} y={1} />
            {/* TODO: заменить 1 на х и у */}
        </>

    )
}

export default Map
