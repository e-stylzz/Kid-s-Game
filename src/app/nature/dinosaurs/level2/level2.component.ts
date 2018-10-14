import { Component, OnInit } from '@angular/core';
import { Question } from '../../../_models/question';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {

  data: Question[] = [
    {
      'Question': '____ is the largest dinosaur?',
      'Answer': 'Argentinosaurus',
      'Bank': ['Tyranosaurus Rex', 'Stegosaurus', 'Triceratops', 'Argentinosaurus'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': '______ is a carnovore?',
      'Answer': 'Tyranosaurus Rex',
      'Bank': ['Apatosaurus', 'Brachiosaurus', 'Diplodocus', 'Tyranosaurus Rex'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': '______ is the tallest dinosaur?',
      'Answer': 'Brachiosaurus',
      'Bank': ['Apatosaurus', 'Diplodocus', 'Tyranosaurus Rex', 'Brachiosaurus'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': 'Which dinosaur flies?',
      'Answer': 'Pterodactyl',
      'Bank': ['Pterodactyl', 'Ouranosaurus', 'Spinosaurus', 'Baryonyx'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': 'Which dinosaur swims?',
      'Answer': 'Plesiosaurus',
      'Bank': ['Pterodactyl', 'Nurosaurus', 'Stegosaurus', 'Plesiosaurus'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': '______ is the largest meat eater?',
      'Answer': 'Spinosaurus',
      'Bank': ['Spinosaurus', 'Tyranosaurus Rex', 'Velociraptor', 'Iguanadon'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': '______ had spikes and plates on its back?',
      'Answer': 'Huayangosaurus',
      'Bank': ['Stegosaurus', 'Huayangosaurus', 'Protoceratops', 'Triceratops'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': '______ had had five horns on its head?',
      'Answer': 'Pentaceratops',
      'Bank': ['Stegosaurus', 'Pentaceratops', 'Protoceratops', 'Triceratops'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': '______ had had three horns on its head?',
      'Answer': 'Triceratops',
      'Bank': ['Stegosaurus', 'Pentaceratops', 'Protoceratops', 'Triceratops'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': '______ was a plant eater with spikes for thumbs?',
      'Answer': 'Iguanodon',
      'Bank': ['Iguanodon', 'Pentaceratops', 'Velociraptor', 'Struthiomimus'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': '______ was an armored herbivore with a club for a tail?',
      'Answer': 'Ankylosaurus',
      'Bank': ['Maiasaura', 'Pachycephalosaurus', 'Ankylosaurus', 'Brachiosaurus'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': '______ was a huge bird like dinosaur with three foot claws?',
      'Answer': 'Therizinosaurus',
      'Bank': ['Pteranodon', 'Struthiomimus', 'Dimetrodon', 'Therizinosaurus'],
      'Type': 'Dinosaur',
      'Level': 2
    },
    {
      'Question': '______ was a large herbivore with a clubbed tail like an Ankylosaurus?',
      'Answer': 'Shunosaurus',
      'Bank': ['Shunosaurus', 'Argentinosaurus', 'Edmontosaurus', 'Mosasaurus'],
      'Type': 'Dinosaur',
      'Level': 2
    },

  ];

  question: Question;
  answer: string;
  answer_pool = [];
  showAnswer: boolean;
  correct: boolean;

  constructor() { }

  ngOnInit() {
    this.showAnswer = false;
    this.question = this.data[Math.floor(Math.random() * this.data.length)];
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  checkAnswer(answer: string) {
    console.log('Button clicked');
    this.showAnswer = true;
    this.showAnswer = true;
    if (answer === this.question.Answer) {
      this.correct = true;
      console.log('Correct');
    } else {
      this.correct = false;
      console.log('Wrong');
    }
  }

}
