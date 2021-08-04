new Granim({
  element: '#canvas-complex',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
        gradients: [
            ['#EB3349', '#F45C43'],
            ['#FF8008', '#FFC837'],
            ['#4CB8C4', '#3CD3AD'],
            ['#24C6DC', '#514A9D'],
            ['#FF512F', '#DD2476']
        ],
        transitionSpeed: 3500
      }
  }
});