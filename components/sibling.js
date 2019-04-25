function ParentController($scope, $rootScope) { // Importing PetFinder service
    const ctrl = this;

    ctrl.name = 'BJ';

    $rootScope.$on("rootChange", (event, data) => {
        ctrl.name = data;

        console.log(data);
        console.log(`This message is coming from the "sibling" component...`);
    });
}
  
  angular.module('MyApp').component('sibling', {
    template: `
        <h2>NAME FROM SIBLING: {{$ctrl.name}}</h2>
    `, // or use templateUrl
    controller: ParentController,
});