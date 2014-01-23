// Manages the Poll list 
function PollListCtrl($scope){
	$scope.polls = [];
}
// Voting & Viewing Poll results
function PollItemCtrl($scope, $routeParams){
	$scope.poll = {};
}
// Create a New Poll
function PollNewCtrl($scope){
	$scope.poll = {
		question: ",
		choices: [{text: "}, {text: "}, {text: "}]
	};
	$scope.addChoice = function(){
		$scope.poll.choices.push){text: "});
	}:
	$scope.createPoll = function() {};
}