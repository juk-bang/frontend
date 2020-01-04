import React, { Component } from "react";
import Geocode from "react-geocode";

Geocode.setApiKey("");
Geocode.setLanguage("ko");
Geocode.setRegion("kr");
Geocode.enableDebug();

class Map extends Component {
  state = {
    map: "",
    center: {
      lat: 37.496345,
      lng: 126.957395
    },
    boundary: {
      lat: "",
      lng: ""
    },
    markers: []
  };

  componentDidMount() {
    var iconBase =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

    var icons = {
      parking: {
        icon: iconBase + "parking_lot_maps.png"
      },
      library: {
        icon: iconBase + "library_maps.png"
      },
      info: {
        icon: iconBase + "info-i_maps.png"
      }
    };

    var iconBase2 = "http://maps.google.com/mapfiles/kml/pal2/";

    var icons2 = {
      tree: {
        icon: iconBase2 + "icon4.png"
      }
    };

    const map = new window.google.maps.Map(this.refs.map, {
      zoom: 17,
      center: new window.google.maps.LatLng(
        this.state.center.lat,
        this.state.center.lng
      ),
      mapTypeId: "roadmap"
    });

    const setState = Bounds => {
      this.setState({
        ...this.state,
        boundary: {
          lat: {
            start: Bounds.pa.g,
            end: Bounds.pa.h
          },
          lng: {
            start: Bounds.ka.g,
            end: Bounds.ka.h
          }
        }
      });
    };

    let Bounds;
    const changeBounds = () => {
      this.setState({
        ...this.state,
        boundary: {
          lat: {
            start: Bounds.pa.g,
            end: Bounds.pa.h
          },
          lng: {
            start: Bounds.ka.g,
            end: Bounds.ka.h
          }
        }
      });
      console.log(this.state);
    };

    window.google.maps.event.addListener(map, "bounds_changed", function() {
      Bounds = map.getBounds();
      changeBounds();
    });

    window.google.maps.event.addListener(map, "click", function(e) {
      console.log(e.latLng.lat());
      Geocode.fromLatLng(e.latLng.lat(), e.latLng.lng()).then(
        response => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        error => {
          console.error(error);
        }
      );
    });

    var contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "</div>";
    const infowindow = new window.google.maps.InfoWindow({
      content: contentString
    });
    const marker = new window.google.maps.Marker({
      position: {
        lat: 37.495051,
        lng: 126.957191
      },
      map: map,
      title: "room",
      icon: icons2.tree.icon,
      view: false,
      id: 1
    });
    this.setState({
      ...this.state,
      markers: this.state.markers.push(marker)
    });

    this.state.markers[0].addListener("click", function() {
      infowindow.open(map, marker);
    });

    var contentString2 =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "</div>";
    const infowindow2 = new window.google.maps.InfoWindow({
      content: contentString2
    });
    const marker2 = new window.google.maps.Marker({
      position: {
        lat: 37.494869,
        lng: 126.957195
      },
      map: map,
      title: "room1",
      icon: icons2.tree.icon,
      view: false,
      id: 2
    });
    this.setState({
      ...this.state,
      markers: this.state.markers.push(marker2)
    });
    this.state.markers[1].addListener("click", function() {
      infowindow2.open(map, marker2);
    });

    const markerCluster = new window.MarkerClusterer(map, this.state.markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });

    this.setState({
      ...this.state,
      map: map
    });
  }

  render() {
    return (
      <>
        <div
          ref="map"
          style={{ width: "100%", height: "100%", position: "fixed" }}
        />
        <div class="roomcard"></div>
        {this.state.markers.map(each => {
          console.log(each.position.lat);
          if (
            this.state.boundary.lat.start < each.position.lat() &&
            each.position.lat() < this.state.boundary.lat.end &&
            this.state.boundary.lng.start < each.position.lng() &&
            each.position.lng() < this.state.boundary.lng.end
          ) {
            return (
              <div
                onMouseLeave={() => {
                  each.setAnimation(null);
                }}
                onMouseMove={() => {
                  each.setAnimation(window.google.maps.Animation.BOUNCE);
                }}
              >
                {each.title}
              </div>
            );
          }
        })}
      </>
    );
  }
}

export default Map;
