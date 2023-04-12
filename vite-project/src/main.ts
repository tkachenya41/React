import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

//Retrospective
type Subject = {
  students:number,
  teachers:number
}
type SubjectName = 'mathematics'| 'biology'|'geography'|'chemistry';

const subjects = {
  mathematics: {
      students: 200,
      teachers: 6
  },
  biology: {
      students: 120,
      teachers: 6
  },
  geography: {
      students: 60,
      teachers: 2
  },
  chemistry: {
      students: 100,
      teachers: 3
  }
}



// 1. Создать строку из названий предметов написаных через запятую
function getSubjectNameAsString(subj:Record<SubjectName,Subject>):string {
 return Object.keys(subj).join(', ');
} 
console.log(getSubjectNameAsString(subjects));

// 2. Посчитать общее количнство студентов и учителей на всех предметах
function getTotalQtyOfStudents(subj:Record<SubjectName,Subject>):number{
 return Object.values(subj).reduce((acc, {students})=> acc += students,0)
}

function getTotalQtyOfTeachers(subj:Record<SubjectName,Subject>):number{
  return Object.values(subj).reduce((acc, {teachers})=> acc += teachers,0)
 }

console.log(getTotalQtyOfStudents(subjects));
console.log(getTotalQtyOfTeachers(subjects));

// 3. Получить среднее количество студентов на всех пердметах

function getAverageQty(total:number,qty:number):number{
  return total / qty
}

console.log(getAverageQty(getTotalQtyOfStudents(subjects),Object.keys(subjects).length));

// 4. Создать массив из объектов предметов

const arrOfSubjects = Object.entries(subjects);
console.log(arrOfSubjects)

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
type subjectSorter = (entryA:[key:string,value:Subject],entryB:[key:string,value:Subject])=> number;

const sortTeachersAsc:subjectSorter = ([,subjectA], [, subjectB]) => {
  return subjectA.teachers - subjectB.teachers
};

const sortTeachersDesc:subjectSorter = (([,subjectA],[,subjectB]) => subjectB.teachers - subjectA.teachers);

function getsubjectSorter(direction:'ASC'|'DESC'):subjectSorter{
return direction === 'ASC'? sortTeachersAsc : sortTeachersDesc;
}

console.log(arrOfSubjects.sort(getsubjectSorter('ASC')));

//HW-1 TypeScript
type Faculty = {
  id:number,
  faculty: string,
  subjects: Array<string>,
  countStudents:number
};

const faculties:Faculty[] = [
  {
    id: 1,
    faculty: 'History department',
    subjects: ['The World History', 'History of Rome'],
    countStudents: 44
  },
  { 
    id: 2, 
    faculty: 'Department of Biology', 
    subjects: ['biology', 'chemistry'], 
    countStudents: 50 
  },
  { 
    id: 3, 
    faculty: 'Faculty of Mathematics', 
    subjects: ['mathematics', 'geometry', 'trigonometry'], 
    countStudents: 72 
  }, 
  {
    id: 4, 
    faculty: 'Faculty of Design', 
    subjects: ['ui', 'ux', 'graphic design'], 
    countStudents: 37
  }
];
 type Movie ={
  id: number;
  title: string;
  year: number;
  released: string;
  runtime: string;
  genre: string[];
  director: string;
  writer: string;
  actors: Array<string>;
  plot: string;
  country: string;
  poster: string;
  imdbRating: number;
  imdbVotes: number;
  type: string;
  boxOffice: string;
  production: string;
}

  const movies:Movie[] = [
    {
      id: 1,
      title: 'Black Widow',
      year: 2021,
      released: '09 Jul 2021',
      runtime: '134 min',
      genre: ['Action', 'Sci-Fi', 'Adventure'],
      director: 'Cate Shortland',
      writer: 'Eric Pearson, Jac Schaeffer, Ned Benson',
      actors: ['Scarlett Johansson', 'Florence Pugh', 'David Harbour'],
      plot: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.',
      country: 'United States',
      poster: 'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
      imdbRating: 6.9,
      imdbVotes: 121932,
      type: 'movie',
      boxOffice: '$138,027,361',
      production: 'Marvel Studios'
    },
    {
      id: 2,
      title: 'Harry Potter and the Deathly Hallows: Part 2',
      year: 2011,
      released: '15 Jul 2011',
      runtime: '130 min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      director: 'David Yates',
      writer: 'Steve Kloves, J.K. Rowling',
      actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
      plot: 'Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.',
      country: 'United Kingdom, United States',
      poster: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
      imdbRating: 8.1,
      imdbVotes: 790377,
      type: 'movie',
      boxOffice: '$381,409,310',
      production: 'Heyday Films, Moving Picture Company, Warner Bros.'
    }
  ];