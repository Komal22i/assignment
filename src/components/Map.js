import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA2wjeYBVvcGkZhiLdfRwM-yown6rX1RSI",
  });

  const onLoad = React.useCallback(function callback(map) {}, []);

  return isLoaded ? (
    <div className="h-[60vh] w-full">
      <GoogleMap
        clickableIcons={false}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        options={{ disableDefaultUI: true }}
      >
        <></>
      </GoogleMap>
    </div>
  ) : (
    <h1 className="text-center">Please Wait while loading map</h1>
  );
}

export default React.memo(Map);
