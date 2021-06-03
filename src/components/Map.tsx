import "../components/Map.css"
import "leaflet/dist/leaflet.css";
import { Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import React, { useEffect } from "react";
import { CreateTypes } from "./ReviewPage";
import ObjectPopup from "./ObjectPopup";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { MapContainer } from "react-leaflet";
import UserPopup from "./UserPopup";
import MapPanel from "./MapPanel";




var BusyIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAZMaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjA3KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjA3KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyYmIxOGM0OC1mYzgzLTljNDgtYTUxYi01NjQ3OTQ1ZmIwNDkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplZDUwYzI0ZC1kNDdlLWFmNDAtODNiYi1mNzdhODgxNzFkODkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYzM2OGUyZC0xYTNiLTM2NGUtODQxNS1lNzA3NzY0ODc3MzQiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5EQTIwMTYzMEUxMUJGNUU4RTYzMEY2NkFGN0U3RUQ3RTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFjMzY4ZTJkLTFhM2ItMzY0ZS04NDE1LWU3MDc3NjQ4NzczNCIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0wNVQxOTozNjoxMCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyYmIxOGM0OC1mYzgzLTljNDgtYTUxYi01NjQ3OTQ1ZmIwNDkiIHN0RXZ0OndoZW49IjIwMjEtMDUtMDVUMTk6NDA6MDcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7+AZchAAACVUlEQVRYhbXXO4wNURjA8d9O7ioQGyJxKxKvApWWgkJCsRJKCio1UXqESMQj2UgUQsWGRGHjHQpRkUU2yJKVjddqFonNssRzPYozVyb37tyZuca/ufee8535nzvnfHO+aRuas0QTZmENVmFx/Lsd3zGCftzANbxJu0hbimQ6tmILqs1mEfMWJ9CF93kkq3EU83NcvJ6n2IarycaoLmgDLrYogAU4j41pkrU4hUktCmq04yQ66yVVHEflHwU1KsIaVZOSvfItcBGq8XW1Dc1ZMhsDmFKyBD5jUQXrCwhu4gXmYoXGjVPPZKyrxMFZjGIzLiXaVuMMZmSMXREJ2y6L7XUCuB63Z7EwQkdG0AdcTum7Evc3Y1rWPS2FCJ8yYjokEquOtbLvxMcIwzkmc0jYhUk6cTDH2OGKkCMrMwJnoge38QzzsDyHAAYi3MsZDMuwqYAAeiP0CofQ/+Ab7kR4Lpxw/4P7eBnhl8ZEK4uL+F3LkwsYL1nwQzz5muQR7pYsuYUnSQl0lyw5WfuSlPTgXUmC18ISNEhGhEd3GXRjbCIJHPPvOfNFON//Ui8ZlPibLXJJOD1TJXBYyJ1WGMeB+saJJH3CYdQKPXiYRwL78LOgYBz7J+pIk/QJ5WYRzkl5BjY7fvcKj4Y8fMGetM5mksfy581pYWcWlhBmN5YRMyplLfJKXuFIRkwXhpoFpL1pJZmKByZ+ZxnEUqHmTSVP3fUJu1L6dmQJ8krgrMYq8pqQfJkUqSB34mv8/St25x1YRNIvFHniz768A4u+vnUJhV1XkUF/AK41e2sJTo4qAAAAAElFTkSuQmCC'
})

var FreeIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAZMaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjM1KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjM1KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjODJmYmU5Yy1hNjM1LTA0NDItOTg5Mi02ODYzOGI1NzA2ZjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYzY1NTM5MS04ODNjLWY1NDMtOWJhNC1mOWYxYTRmOGQzOWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZTA4YWY2Mi02ZmI4LTFmNDEtOTI5My1iNGE2ZjMxYzFiOGQiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5EQTIwMTYzMEUxMUJGNUU4RTYzMEY2NkFGN0U3RUQ3RTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZlMDhhZjYyLTZmYjgtMWY0MS05MjkzLWI0YTZmMzFjMWI4ZCIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0wNVQxOTozNjoxMCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjODJmYmU5Yy1hNjM1LTA0NDItOTg5Mi02ODYzOGI1NzA2ZjMiIHN0RXZ0OndoZW49IjIwMjEtMDUtMDVUMTk6NDA6MzUrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7T5wAxAAACyUlEQVRYhbXXz6tWRRzH8deMjy0KkkK4t01Bppv6D2phi8CQK9SihQa5ai24TEUJohQu7aK7Uklo0cW0wBbRqrDkInETRchfG/tBYj8ktW5OiznHO577nOece338wOHM+X6/M+8zM+c7Mye8tv9XIzSReBkvkZ7FBFbjH1wjzOPLEJzAzwEhLFaOIT8PIKHwSTyGHXgTk9naiBCewHOkrSn5hTAjmE7J73XkHUTEVFSrrk04hT2LgKZCoxwmSLtTSqdSsvlum4k7KYNKbcUxPDO88VEKsJ50NCXbypcvIVtwCA8tH1CCwmrSwZRMpYpSQybxoWqO7l9hQJqRTJY92ad1/FesyZTbFfEkto0ZIA9del3y1ACv4pGeNb/CRTyNjZZ+OE3Qw4lXBlVwl65jO44Xtk04gsc76m6MWN8DsrMBgC8qe5c2RKzpCPoDn7X4Pq/8o/Rox5iORxE3OmLWYKrFt0X3SPwVcbXHy+yXv8JSU3ivR92rA5zFix2BazGLb/Aj1uGFHgA4G+UVt6+exxvLAMDJiJPyJvQgdBvfRlzA/AOCnMalKG9gzUQbl44h1XnyKRbGDPhX9fI15Ad8N2bI1zhXQuDwmCEH60IJmcVvYwL8JE/BEsg1eekehw7jz2EQ+MD958xNzJSGJuS8opsr1HF592yFwAE5d1aiBbzbNA6DzMmb0Uo0i+9LQ2iBwNv4b5mABbwzzNEGmcPRZUI+0VgD6xPzqO13n7w09NFN7B3qCaMhZ/TPm4/kL7Ns+666DhJ7FUnVousacxGKwqiJr3UF73fETOPyMAD5T6vPkeiAvK8P0/kKMlR9Jr7WDexu8b2Fv5uN1sMUAjGEXhD42NJT5Ak5+VoB9RWD3tqFW1X5lvxPmRtsBQSxnpN7Ats1Lx/yVPe5e+o0AXIPYmSQ/1UaXV40NTWNdaGc7LB4a/ZgVWRVDP4HSv6kPExN+3IAAAAASUVORK5CYII='
})

var InactiveIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAZMaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjUyKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA1VDE5OjQwOjUyKzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3YTgwMzc0NS1kMDIzLThjNGQtODI4NC0wZGM3MWU5NjY3YTciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MTQ5ZDg5Ni0yNGQ3LTNkNDItYWI2Yy03MmY2MzE2NjUwMjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMTgwNjFiZi04YzViLTk1NDgtYThjOS02YTg2MTJkMTUxOWEiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5EQTIwMTYzMEUxMUJGNUU4RTYzMEY2NkFGN0U3RUQ3RTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmMxODA2MWJmLThjNWItOTU0OC1hOGM5LTZhODYxMmQxNTE5YSIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0wNVQxOTozNjoxMCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YTgwMzc0NS1kMDIzLThjNGQtODI4NC0wZGM3MWU5NjY3YTciIHN0RXZ0OndoZW49IjIwMjEtMDUtMDVUMTk6NDA6NTIrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6A1Zc3AAACT0lEQVRYhbXXuWsVQRzA8Y/Li4WCogjGRsGr0f9Ai1gIEUlAyyhoZS1YeqAI4gHBTrSKQUHQoIlCLMRK8SCIRIkEPBsPULyCZzyK2SfL5u3b3efm27zdmd/sd9/M/GZmZ1w4f14TFmID1mNVfN+GH3iHUVzDMF5nPaSWUT4PO7ED7Rkxi7AaPXiDU+jFh3Rg1KBxJ+5iXxNBmoXYG7fbmCfpwSCWF3x4mhW4iC1Zkm6cxswWBXXa0IeutKQdJ2WPUVlqwhi1JyUHFO//orTHzxVhsVQfVshWLKlhM2YXbHQdT7EUHRrPziSzsKkWB+fxHtsxlCjrxFnMz2nbEQnTLo9dKQFcjcvzWBlhbk7QR1zOqLsS1zdjTl6fVkKEiZyYuRKJlaJbfk98jvCywMscFWZhki4cKdD2ZQ1jWJcTuAADuInHWIa1BQQwFgkrZ1HWYFsJAdyKcEvYhKaD77gd4Ymww00H9/Aswm9TE60qBvGnnieXMFmx4Kf45euSB7hTseQGHiUl0F+xpK9+kZQM4G1FglfCEEyRvBOW7irox6dGEjjh/3Pmq7C//yMtGZf4my0yJOyemRI4JuROK0zicLqwkWRE2IxaYQD3i0jgIH6VFEziUKOKLMmIcNwswwUZa2Cz7feAsDQU4Sv2Z1U2kzxUPG/OCDOztITwdp9yYt7LGIuikhc4nhPTi+f/IyHkzeOMuvFY0pQikgnhK6oRu/GlCgmcM/UUOSwkXy5lTpB78C2+/iZ8UxaijGRUOOSJf0eKNiz7+dYrHOxyBzvJX5Pgdy8lcOgMAAAAAElFTkSuQmCC'
})

var FreePersonIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAeNaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTAyVDE1OjQxOjA3KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA2LTAyVDE1OjQxOjA3KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZGNhZjA5NTctYmJkMS1hYTRmLWFhM2QtYzM4YWI4YzVlNThlIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDdmM2MwOGItYWNjMC1lZDRkLWFhNmUtODcxYjRiZDQ5MjQyIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWMzNjhlMmQtMWEzYi0zNjRlLTg0MTUtZTcwNzc2NDg3NzM0Ij4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+REEyMDE2MzBFMTFCRjVFOEU2MzBGNjZBRjdFN0VEN0U8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6OGFkZDkxZDEtOGM0NS1iNzRlLWJjMjctMWExNWZiN2NkNjNhPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWMzNjhlMmQtMWEzYi0zNjRlLTg0MTUtZTcwNzc2NDg3NzM0IiBzdEV2dDp3aGVuPSIyMDIxLTA1LTA1VDE5OjM2OjEwKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3Ag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'
})
var BusyPersonIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAeNaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTAyVDE2OjIzOjM1KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA2LTAyVDE2OjIzOjM1KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZTJmYjIwYzUtMjdjNS04YjRmLTg4MWEtZmFjZWE3YmU2MDlmIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NGI1OWFmYmUtZDdlOC01MTQ2LWI4MTYtODQ1MDUwOTRhNzI4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWMzNjhlMmQtMWEzYi0zNjRlLTg0MTUtZTcwNzc2NDg3NzM0Ij4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+REEyMDE2MzBFMTFCRjVFOEU2MzBGNjZBRjdFN0VEN0U8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6OGFkZDkxZDEtOGM0NS1iNzRlLWJjMjctMWExNWZiN2NkNjNhPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWMzNjhlMmQtMWEzYi0zNjRlLTg0MTUtZTcwNzc2NDg3NzM0IiBzdEV2dDp3aGVuPSIyMDIxLTA1LTA1VDE5OjM2OjEwKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3Ag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'
})

var SelectedFreePersonIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAeNaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTAyVDE2OjE1OjQwKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA2LTAyVDE2OjE1OjQwKzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWRmNGJjODMtYTliMC1kMTQ5LWJmNWMtYTlhODQyNGQ5ODQwIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjY0ZGE0NjktNjcyZS1lZTQ5LWIzNjQtZmIwNWNlMDM1ZjZjIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWMzNjhlMmQtMWEzYi0zNjRlLTg0MTUtZTcwNzc2NDg3NzM0Ij4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+REEyMDE2MzBFMTFCRjVFOEU2MzBGNjZBRjdFN0VEN0U8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6OGFkZDkxZDEtOGM0NS1iNzRlLWJjMjctMWExNWZiN2NkNjNhPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWMzNjhlMmQtMWEzYi0zNjRlLTg0MTUtZTcwNzc2NDg3NzM0IiBzdEV2dDp3aGVuPSIyMDIxLTA1LTA1VDE5OjM2OjEwKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3Ag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'
})
var SelectedBusyPersonIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAeNaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTAyVDE2OjIzOjUzKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA2LTAyVDE2OjIzOjUzKzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDhlNTcxY2QtZWQ1YS03YjQxLWI2NGUtYTA3NjY3OTBkNjYwIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MWY2YmQ5MGEtYzIwMi04NDQ2LTk4MmMtNzEyYWMxYjEwNWYwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWMzNjhlMmQtMWEzYi0zNjRlLTg0MTUtZTcwNzc2NDg3NzM0Ij4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+REEyMDE2MzBFMTFCRjVFOEU2MzBGNjZBRjdFN0VEN0U8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6OGFkZDkxZDEtOGM0NS1iNzRlLWJjMjctMWExNWZiN2NkNjNhPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWMzNjhlMmQtMWEzYi0zNjRlLTg0MTUtZTcwNzc2NDg3NzM0IiBzdEV2dDp3aGVuPSIyMDIxLTA1LTA1VDE5OjM2OjEwKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3Ag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'
})

function DoubleClickObjectModal() {
    const { mapCenter } = useActions()
    const { setObjectCreate } = useActions()

    const map = useMapEvents({
        dblclick(e: any) {
            setObjectCreate(e.latlng.lat, e.latlng.lng)
            $("#" + CreateTypes.ModalObjectAdd).modal('show')
            mapCenter(e.latlng.lat, e.latlng.lng)
        },
    })

    return (
        null
    )
}

function MapCentered() {
    const { center } = useTypedSelector(state => state.mapCenter)
    const { detectedObjects } = useTypedSelector(state => state.detectedObjects)
    const { mapCenter } = useActions()

    const map = useMap()

    useEffect(() => {
        // if (detectedObjects.length != 0) {
        //     mapCenter(detectedObjects[0].x, detectedObjects[0].y)
        // }

        map.setView([center[0], center[1]])
    }, [center])

    return (
        null
    )
}


function Map() {
    const { detectedObjects } = useTypedSelector(state => state.detectedObjects)
    const { users } = useTypedSelector(state => state.clusteringUsers)
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { center } = useTypedSelector(state => state.mapCenter)
    const { fetchDetectedObjects, fetchObjectUpdate, mapCenter, addUser, removeUser } = useActions()
    useEffect(() => {
        fetchDetectedObjects(activeOperation != null ? activeOperation.id : 0)
    }, [activeOperation]);


    useEffect(() => {
        if (detectedObjects.length != 0) {
            mapCenter(detectedObjects[0].x, detectedObjects[0].y)
        }
    }, [])

    return (
        <>
            <MapContainer
                center={
                    [center[0], center[1]]
                }
                zoom={10}
                scrollWheelZoom={true}
                doubleClickZoom={false}
                style={{ height: "100%" }}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    detectedObjects.length != 0
                        ?
                        detectedObjects.map(detectedObject => {
                            return (
                                <Marker
                                    position={[parseFloat(detectedObject.x), parseFloat(detectedObject.y)]}
                                    eventHandlers={
                                        {
                                            contextmenu: (e) => {
                                                fetchObjectUpdate(detectedObject.id)
                                                $("#" + CreateTypes.ModalObjectUpdate).modal('show')
                                                mapCenter(e.latlng.lat, e.latlng.lng)
                                            },
                                        }

                                    }
                                    icon={
                                        (() => {
                                            if (detectedObject.missionId == null && detectedObject.isDesired === false)
                                                return FreeIcon
                                            if (detectedObject.missionId != null && detectedObject.isDesired === false)
                                                return BusyIcon
                                            if (detectedObject.isDesired == true)
                                                return InactiveIcon
                                        })()
                                    }
                                >
                                    <Popup>
                                        <ObjectPopup
                                            id={detectedObject.id}
                                            name={detectedObject.title}
                                            description={detectedObject.description}
                                            img={detectedObject.image != null ? detectedObject.image.path : null}
                                            x={detectedObject.x}
                                            y={detectedObject.y}

                                        />
                                    </Popup>
                                </Marker>
                            )
                        })
                        : null
                }

                {
                    activeOperation != null
                        ?
                        activeOperation.users.map((user: any) => {
                            return (
                                <Marker
                                    position={[user.userPositions[0].x, user.userPositions[0].y]}
                                    icon={
                                        user.missions.length != 0
                                            ? BusyPersonIcon
                                            : FreePersonIcon
                                    }
                                    eventHandlers={
                                        {
                                            contextmenu: (e) => {
                                                const existUser = users.filter(function (userClust) {
                                                    return userClust.id == user.id
                                                })
                                                if (existUser.length != 0) {
                                                    e.target.setIcon(
                                                        user.missions.length != 0
                                                            ? BusyPersonIcon
                                                            : FreePersonIcon
                                                    );
                                                    removeUser(existUser[0].id)
                                                } else {
                                                    e.target.setIcon(
                                                        user.missions.length != 0
                                                            ? SelectedBusyPersonIcon
                                                            : SelectedFreePersonIcon
                                                    );
                                                    addUser({ id: user.id, firstName: user.firstName, secondName: user.secondName })
                                                }
                                            },
                                        }

                                    }
                                    zIndexOffset={200}
                                >
                                    <Popup>
                                        <UserPopup id={user.id} key={user.id} name={user.firstName + " " + user.secondName}></UserPopup>
                                    </Popup>
                                </Marker>
                            )
                        })
                        :
                        null
                }
                <MapPanel />
                <MapCentered />
                <DoubleClickObjectModal />
            </MapContainer>
        </>

    )
}

export default Map
