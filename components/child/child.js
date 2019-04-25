function ChildController($scope) { // Importing PetFinder service
    const vm = this;

    vm.emitData = function() {
        // this is no longer ChildController, 
        // it is emitData
        $scope.$emit('myName', vm.name)
    }

    $scope.$on("reset", (event, data) => {
        vm.name = data;

        console.log(data);
        console.log(`This message is coming from the "child" component...`);
    });

    vm.$onInit = () => {
        vm.name = vm.startName;
    }

}
  
  angular.module('MyApp').component('child', { 
    template: `
        <input ng-model="$ctrl.name"/>
        <button ng-click="$ctrl.emitData()">Add Name</button>
    `, // or use templateUrl
    controller: ChildController,
    bindings: { // bindings show up in the controller
        startName: '@' 
    }
});

// Getter
angular.module('MyApp').component('child');

// returns component