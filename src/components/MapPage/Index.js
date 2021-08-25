import React, { useEffect } from "react";
import { API_KEY } from "../../config";
import "./Index.css";

export default function MapPage() {
    useEffect(function () {
        const script = document.createElement("script");
        const script2 = document.createElement("script");
        const style = document.createElement("style");

        script.src =
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDUZQqIqIVxiGWPPOJEF0TLtrqtwT9l6UA&callback=initMap&libraries=&v=weekly";
        script.async = true;

        script2.src = "";
        script2.innerHTML = `function initMap() {
            const map = new google.maps.Map(
                document.getElementById("map"),
                {
                    center: { lat: 0, lng: 0 },
                    zoom: 1,
                    streetViewControl: false,
                    mapTypeControlOptions: {
                        mapTypeIds: ["moon"],
                    },
                }
            );
            const moonMapType = new google.maps.ImageMapType({
                getTileUrl: function (coord, zoom) {
                    const normalizedCoord = getNormalizedCoord(coord, zoom);

                    if (!normalizedCoord) {
                        return "";
                    }
                    const bound = Math.pow(2, zoom);
                    return (
                        "https://mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw" +
                        "/" +
                        zoom +
                        "/" +
                        normalizedCoord.x +
                        "/" +
                        (bound - normalizedCoord.y - 1) +
                        ".jpg"
                    );
                },
                tileSize: new google.maps.Size(256, 256),
                maxZoom: 9,
                minZoom: 0,
                radius: 1738000,
                name: "Moon",
            });
            map.mapTypes.set("moon", moonMapType);
            map.setMapTypeId("moon");
        }

        // Normalizes the coords that tiles repeat across the x axis (horizontally)
        // like the standard Google map tiles.
        function getNormalizedCoord(coord, zoom) {
            const y = coord.y;
            let x = coord.x;
            // tile range in one direction range is dependent on zoom level
            // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
            const tileRange = 1 << zoom;

            // don't repeat across y-axis (vertically)
            if (y < 0 || y >= tileRange) {
                return null;
            }

            // repeat across x-axis
            if (x < 0 || x >= tileRange) {
                x = ((x % tileRange) + tileRange) % tileRange;
            }
            return { x: x, y: y };
        }`;

        style.innerHTML = `#map {
            height: 100%;
        }

        /* Optional: Makes the sample page fill the window. */
        html,
        body {
            height: 100%;
            margin: 0;
            padding: 0;
        }`;

        document.body.appendChild(script);
        document.body.appendChild(script2);
        document.body.appendChild(style);

        return (
            () => {
                document.body.removeChild(script);
                document.body.removeChild(script2);
                document.body.removeChild(style);
            },
            []
        );
    });

    return <div id="map"></div>;
}
