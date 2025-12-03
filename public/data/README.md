# India States GeoJSON Data

## Where to Get Accurate GeoJSON Data

For the most accurate Indian state boundaries, download from these free, open-source repositories:

### Option 1: DataMeet India (Recommended)
**Best for:** Simplified boundaries, perfect for web visualizations

1. Visit: https://github.com/datameet/maps
2. Navigate to: `States/` folder
3. Download: `india_state.geojson`
4. Place in: `public/data/india-states.geojson`

### Option 2: geoBoundaries
**Best for:** High-detail international boundaries

1. Visit: https://www.geoboundaries.org/
2. Search: "India"
3. Select: ADM1 (State level)
4. Download GeoJSON
5. Place in: `public/data/india-states.geojson`

### Option 3: Natural Earth Data
**Best for:** Global datasets

1. Visit: https://www.naturalearthdata.com/
2. Download: Admin 1 – States, Provinces
3. Filter for India
4. Convert to GeoJSON if needed
5. Place in: `public/data/india-states.geojson`

## Required Properties

Your GeoJSON file should have these properties for each state:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "ST_NM": "State Name",  // or "name", "STATE_NAME", etc.
        "ST_CODE": "XX"         // Optional state code
      },
      "geometry": {
        "type": "Polygon" or "MultiPolygon",
        "coordinates": [...]
      }
    }
  ]
}
```

## Current File

A simplified demo file is provided for testing. Replace with detailed data for production use.
