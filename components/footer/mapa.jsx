export function MapaFooter() {
  return (
    <div className="w-full h-full rounded-[50%]">
      <gmp-map
        center="25.764244079589844,-80.25947570800781"
        zoom="12"
        map-id="DEMO_MAP_ID"
      >
        <gmp-advanced-marker
          position="25.764244079589844,-80.25947570800781"
          title="My Address"
        ></gmp-advanced-marker>
      </gmp-map>
    </div >
  );
}
