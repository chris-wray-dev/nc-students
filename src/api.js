import axios from 'axios';

const BASE_URL = 'https://nc-student-tracker.herokuapp.com/api';

export const getAllStudents = (key='startingCohort', order='asc') => {
  return axios.get(`${BASE_URL}/students?sort_by=${key}&order=${order}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    })
}

export const getStudentById = (student_id) => {
  return axios.get(`${BASE_URL}/students/${student_id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    })
}

export const getAllBlocks = () => {
  return axios.get(`${BASE_URL}/blocks`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    })
}

export const postNewStudent = (student) => {
  console.log(student);
  return axios.post(`${BASE_URL}/students/`, student)
    .then(response => {
      return response.data;
    })
    .catch(err => console.log(err))
}