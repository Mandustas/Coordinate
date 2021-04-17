import "../components/Map.css"
import "leaflet/dist/leaflet.css";
import L, { } from 'leaflet';
import { useEffect, useState } from "react";
import ModalObjectAdd from "./ModalObjectAdd";
import { CreateTypes } from "./ReviewPage";
import ObjectPopup from "./ObjectPopup";
import ReactDOMServer from 'react-dom/server'

// export interface MapState{
//     height: string
// }

const points = {
    "points": [
        {
            "id": 1,
            "name": "Объект #1",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, deserunt error. Repudiandae illo ex, deleniti vel, consectetur beatae non error, vitae assumenda reprehenderit nemo perspiciatis. Eius laborum dicta odio ipsa.",
            "img": "https://thumbs.dreamstime.com/b/%D0%BB%D0%B5%D1%81-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83-%D0%BB%D0%B5%D1%82%D0%BE%D0%BC-%D0%B2%D0%B8%D0%B4-%D1%81-%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B0-%D0%BE%D0%B1%D0%BE%D0%B5%D0%B2-%D0%BB%D0%B5%D1%81%D0%B0-153275483.jpg",
            "x": "53.22104557790858",
            "y": "34.11112667059104",
        },
        {
            "id": 2,
            "name": "Объект #2",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, deserunt error. Repudiandae illo ex, deleniti vel, consectetur beatae non error, vitae assumenda reprehenderit nemo perspiciatis. Eius laborum dicta odio ipsa.",
            "img": "https://i.pinimg.com/736x/c5/dc/53/c5dc53070960ee2ea4fb07ed2ff325b3.jpg",
            "x": "53.24104557790858",
            "y": "34.15012667059104",
        },
        {
            "id": 2,
            "name": "Объект #3",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, deserunt error. Repudiandae illo ex, deleniti vel, consectetur beatae non error, vitae assumenda reprehenderit nemo perspiciatis. Eius laborum dicta odio ipsa.",
            "img": "https://envato-shoebox-0.imgix.net/4c17/f9ef-0fc2-4571-8819-373327ab564c/trip+mix-12.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=e56aa60d45ab74037c9f43d3a088bbdf",
            "x": "53.23204557790858",
            "y": "34.12212667059104",
        },
    ]
}

var myIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII='
})

function onMapClick(e: any) {

    $("#" + CreateTypes.ModalObjectAdd).modal('show')

    console.log(e.latlng);
}
function handleClick() {
    alert("qwe")
    console.log("qwe");

}
export let map: any;

function Map() {
    // const greenOptions = { color: 'green', fillColor: 'green' }
    const [x, setX] = useState(parseFloat(points.points[0].x));
    const [y, setY] = useState(parseFloat(points.points[0].y));
    // const [map, setMap] = useState("");
    useEffect(() => {
        if (map != undefined) { map.remove(); }
        map = L.map('mapid').setView([x, y], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        points.points.forEach(element => {
            return L.marker([parseFloat(element.x), parseFloat(element.y)], {
                icon: myIcon,
                draggable: true,
            }).addTo(map).bindPopup(ReactDOMServer.renderToString(<ObjectPopup id={element.id} name={element.name} description={element.description} img={element.img} x={element.x} y={element.y} />));
        });
        console.log("repaint");

        function onMapClick(e: any) {
            setX(e.latlng.lat)
            setY(e.latlng.lng)

            $("#" + CreateTypes.ModalObjectAdd).modal('show')

        }
        map.on('dblclick', onMapClick);
    });


    return (
        <>
            <div id="mapid" style={{ height: "698px" }}>

            </div>
            <ModalObjectAdd x={x} y={y} />
        </>

    )
}

export default Map
