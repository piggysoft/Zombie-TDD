ZOMBIE.pageInitialized = (function (Z) {
  "use strict";

  var hub = new Faye.Client("http://localhost:3000/faye");

  Z.blueprintController.create({
    blueprintRoot: document.getElementById("blueprints"),
    hub: hub
  }).init();

  var building = Z.building.create({
    zombies: 50,
    barricade: 7,
    rooms: [ Z.rooms.trapdoor.create() ],
    sleepers: 4
  });

  Z.hub = hub;

  var controller = Z.buildingController.create({
    building: building,
    hub: hub
  });

  controller.on("change", function (building) {
    Z.updateBuildingView(
      document.getElementById("building"),
      Z.renderBuilding,
      building
    );
  });

  return controller.init();

}(ZOMBIE));