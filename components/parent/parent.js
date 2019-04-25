function ParentController($scope, $rootScope) { // Importing PetFinder service
    const ctrl = this;

    ctrl.name = 'BJ';
    $scope.name = 'BJ';

    $scope.$on("myName", (event, data) => {
        ctrl.name = data;

        console.log(event,data);
        $rootScope.$broadcast('rootChange', data);

        console.log(`This message is coming from the "parent" component...`);
    });

    ctrl.reset = () => {
        $scope.$broadcast('reset', 'BJ')
    }
}
  
 angular
.module('MyApp') // get the module
.component('parent', { // create a component and set it to the module
    template: `
        <h2>NAME FROM CHILD: {{$ctrl.name}}</h2>
        <h2>NAME IN SCOPE {{name}}</h2>
        <button ng-click="$ctrl.reset()">Reset</button>
      
        <child start-name="BJ"></child>
        <child start-name="Steve"></child>


    `, // or use templateUrl
    controller: ParentController,
});