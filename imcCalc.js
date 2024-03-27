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
  return {...patient, height: (patient.height / 100).toFixed(2),}
})

const formatedPatientsWithImc = formatedPatients.map((patient) => {
  return {...patient, imc: (patient.weight / patient.height**2).toFixed(2)}
})

formatedPatientsWithImc.map((patient) => {
  return alert(`O Paciente ${patient.name} tem o IMC de ${patient.imc}`)
})
