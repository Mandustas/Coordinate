import "../components/Map.css"
import "leaflet/dist/leaflet.css";
import { Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import React, { useEffect, useMemo, useState } from "react";
import ModalObjectAdd from "./ModalObjectAdd";
import { CreateTypes } from "./ReviewPage";
import ObjectPopup from "./ObjectPopup";
import ReactDOMServer from 'react-dom/server'
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { MapContainer } from "react-leaflet";
import ModalObjectUpdate from "./ModalObjectUpdate";
import UserPopup from "./UserPopup";




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
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAdBaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTI3VDExOjM0OjE3KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTI3VDExOjM0OjE3KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZTVmZDRmY2MtZGMxZS1lZTQwLTkwNzEtMzcyNDc5ZDAzZjhhIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OGFkZDkxZDEtOGM0NS1iNzRlLWJjMjctMWExNWZiN2NkNjNhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWMzNjhlMmQtMWEzYi0zNjRlLTg0MTUtZTcwNzc2NDg3NzM0Ij4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+REEyMDE2MzBFMTFCRjVFOEU2MzBGNjZBRjdFN0VEN0U8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYzM2OGUyZC0xYTNiLTM2NGUtODQxNS1lNzA3NzY0ODc3MzQiIHN0RXZ0OndoZW49IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmJiMThjNDgtZmM4My05YzQ4LWE1MWItNTY0Nzk0NWZiMDQ5IiBzdEV2dDp3aGVuPSIyMDIxLTA1LTA1VDE5OjQwOjA3KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU1ZmQ0ZmNjLWRjMWUtZWU0MC05MDcxLTM3MjQ3OWQwM2Y4YSIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0yN1QxMTozNDoxNyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtH17sAAAAMYSURBVFiFrddLaB1VHMfxTya3DUaSNtCQm4UtatqNr01diAuLD6yIogW7qO4E243goq6MolREIgZ34mNRi0opVtsqdKEiqBC1QSSKpeS2KoUm0bS53ubRJDeJi7mxueO8bsxvNTO///y/Z845/3POND3W96cUdeEB3IebavfrMIeLGMIXOInRpCSFhOcdeAZPoZgQ042bsQdjeBv9KEcDg5iXd+IHvJACiKoLz9feezALsgfH0ZMzeVRb8QkeT4I8jPewfpWAZa3DQTwUhRTxluQxalQF4RgVl2/gJSn939nebP8j7a7vutqGc2NVrx+r+KuykPRasZZ3b4DNIn24Us0Bvbs31AHghq6C3t0bNMdNnat6AlsC7MK1SVHbe1p0dzTHet0dzbb3tKRBWvFogB1pUZs3xQOWdV2Gjx2BcNol6sJEYp+DkUvpPrYF2JgWMViaMzG1GOtNTC46VZrLgrSnDxtm55e8fORvY+X6Fo+VFxw4UjZXXcpKoYDJrKDz41VPv3PJ7VtbFDcGRsuLTg3PZiav6XIBI9iWJ7qBxCt1oYDTuCvq9HQXPHlvm/bWpswslekl735+2dnRapz9a0G4cu6LOnvvb7OlM98q09nOvp1tnj04EWcPBBgQbkJ1al2f/QU54mfxXYBh/Bx1c0zNOn0/HBv/I34LsIATUffDr6eURmL7+D8qjVQd/mYqzjqOpabaHn9LjVo3CE3YdUere269xqaYkhqvLPpyaMbHA9NiqmUet+F004qDxLe4M1fT8+kr3E39znhoDQGEu6Mo5CjG1wgwgmNxkIv4YI0gh1CJg8CbYmqmQc0I9/d/FYWcseIzV6kTOJcGgdcQv4Fkq4pXow/jIIP4bJWQo/gpDwQOCFeCRlTFK3FGEmRQeNxsRB8JT/m5IYQHs/mcgBm8mGSmQX6Rv27eF87MhiGEratkxExIGIu8kD/wRkZMP37/PxDCuikleGdqkFTlgUwK/6Li9Bym1wICh/Fp5NlJYfFlKi8EenGldn1F+E+ZS41AhtBXu+4TFmwuNfr71o8b5RjslfoHzCXKZjGP5dcAAAAASUVORK5CYII='
})
var BusyPersonIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAdBaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTI3VDExOjI4OjU1KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTI3VDExOjI4OjU1KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjNjZGFmMDgtYWRhNS0zNTRmLTg2YTMtMDY1NWUzMWIzYTNiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ODU2YWU5YTgtNWVlYy1kMDRmLThlYjgtNWUyZDU3MmIwNjMzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWMzNjhlMmQtMWEzYi0zNjRlLTg0MTUtZTcwNzc2NDg3NzM0Ij4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+REEyMDE2MzBFMTFCRjVFOEU2MzBGNjZBRjdFN0VEN0U8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYzM2OGUyZC0xYTNiLTM2NGUtODQxNS1lNzA3NzY0ODc3MzQiIHN0RXZ0OndoZW49IjIwMjEtMDUtMDVUMTk6MzY6MTArMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmJiMThjNDgtZmM4My05YzQ4LWE1MWItNTY0Nzk0NWZiMDQ5IiBzdEV2dDp3aGVuPSIyMDIxLTA1LTA1VDE5OjQwOjA3KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzY2RhZjA4LWFkYTUtMzU0Zi04NmEzLTA2NTVlMzFiM2EzYiIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0yN1QxMToyODo1NSswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prmu3s0AAAMMSURBVFiFrddNaFxVGMbx3wwzldYgVhcmLTqUahSNCG5d2BYidaFE3Zlu3GSt61qpVESiDEULogvRoqBi6Ke0mFI3gi6KmqbURqGdIZBJqiGhSJJJJo2LOymTm/s1MQ8Mc+c8733/58y57z3n5CqlHgl6AM+jF080fxexiGlcxgWcw2RcklwMZDtexwA6k3rR1BQ+RRmzWSD78REezpA8rL/wBr5vbcyHgl7FqQ0C4BGcQH8c5EV8gS0bBKyqiM/xQhjSiU9Q+J+AVRUEc9TZCnlbwgQXdu7QdfZbpcronU/XmW8Udu5IAnU288pVSj0P4SrujorMFQq6hk8q7iqt85ZuVNV6+6w0GnGgOTyex8txANjauzcSAMVdJVt798aPhW14KY89SVHFR5MftGL37kQfe/KCxy5WjevVxAxpPrrzuDcpYm74ouWbf0d6y1M3zQ1fTIPcEy7GdVqZXzB1YECjOr6mvVEdN3VgwMpCPS2FXKXUM4bu1Ehse26fQulBjeq4uR9SR7CqawXUskLaSNyqiQL+wLNh566nnnTfkYPy929PzXJ7esb0oXcsjlyJsq/mKqWe1/BZ2Ok6P2TLY5kGCBav/am2/5Uoqz+PnwWL0BrlOzoyAxLi6/glL1gDRsPufJv//9z5C1HNv+JGHss4HXZnBo+qj6xjR6o+Mmr2gw+jrFNYWa2TE1jzlltZqJvs6zdbPqYxUYtM3piomS0fM9nXH1UvS6udb11+f8IzmbqeTT9iH2tXxuObCCBYHYUhQ/hnkwA1nIyCTOOrTYIcx60oCHwsomba1Lxgfb+jMGRMyzA3qNO4ngSB93F7g4AG3gs3RkEu4ewGIUP4PQsEjgjeBO2ogXejjDjIJcFboB19J9jlZ4YQbMyWMgLmcTjOTIJckb1uvhQ8mW1DCHp3KyVmRsxcZIVUcTQlpoxKUkDcSatVHfhN9JllDE8L9ryxSt134V8civEOpgGyQuBrnAm1nRMUX6qyQuBNLDSvF/BW1hvbgVzGYPN6UFCwmdTu8a2M3c3vzPoPSATYPtjxaMQAAAAASUVORK5CYII='
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
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { center } = useTypedSelector(state => state.mapCenter)
    const { fetchDetectedObjects, fetchObjectUpdate, mapCenter } = useActions()

    useEffect(() => {
        fetchDetectedObjects(activeOperation != null ? activeOperation.id : 0)
    }, [activeOperation]);


    useEffect(() => {
        if (detectedObjects.length != 0) {
            mapCenter(detectedObjects[0].x, detectedObjects[0].y)
        }
    }, [])

    console.log(detectedObjects);
    

    return (
        <>
            <MapContainer
                center={
                    [center[0], center[1]]
                }
                zoom={10}
                scrollWheelZoom={true}
                doubleClickZoom={false}
                style={{ height: "100%" }
                }
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
                <MapCentered />
                <DoubleClickObjectModal />
            </MapContainer>
        </>

    )
}

export default Map
