const patients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190,
  },

  {
    name: 'Alexandra',
    age: 27,
    weight: 70,
    height: 170,
  },

  {
    name: 'Carlos',
    age: 42,
    weight: 90,
    height: 180,
  }
]


const formatedPatients = patients.map((patient) => {
  return {...patient, height: (patient.height / 100).toFixed(2)}
})

formatedPatients.map((patient) => {
  return alert(`Paciente ${patient.name}, tem ${patient.age} anos pesa ${patient.weight} kgs e mede ${patient.height}m de altura`)
})
