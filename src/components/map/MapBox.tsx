import Map, { Marker } from "react-map-gl/mapbox";
import mapMarker from "../../assets/map/mapMarker.svg"

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN as string;

type MapboxMapProps = {
    latitude?: number
    longitude?: number
    zoom?: number
    className?: string;
}


export default function MapBox({
                                   latitude = 41.05783688920977,
                                   longitude = -74.13853825909639,
                                   zoom = 16,
                                   className = "rounded-4xl",
                               }: MapboxMapProps){
    return (
        <div className={`w-full h-full overflow-hidden ${className}`}>
            <Map
                mapboxAccessToken={MAPBOX_TOKEN}
                initialViewState={{
                    latitude,
                    longitude,
                    zoom,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                dragRotate={false}
                touchZoomRotate={false}
                style={{ width: "100%", height: "100%" }}
                onClick={() => {
                    window.open(
                        `https://maps.app.goo.gl/PY49mJCFvhqytUYM9`,
                        "_blank"
                    );
                }}
            >
                <Marker
                    longitude={longitude} latitude={latitude}
                    anchor="bottom"
                    offset={[0, 16]}
                >
                    <div className="relative inline-flex flex-col items-center">
                        <img
                            src={mapMarker}
                            alt="map marker"
                        />
                    </div>

                </Marker>
            </Map>
        </div>
    );
}