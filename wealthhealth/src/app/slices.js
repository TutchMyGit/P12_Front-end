import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employee : {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
    },
    employeesData: [],
    isModalOn: false
};

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setEmployee: (state, action) => {
            state.employee.firstName = action.payload.firstName;
            state.employee.lastName = action.payload.lastName;
            state.employee.dateOfBirth = action.payload.dateOfBirth;
            state.employee.startDate = action.payload.startDate;
            state.employee.street = action.payload.street;
            state.employee.city = action.payload.city;
            state.employee.state = action.payload.state;
            state.employee.zipcode = action.payload.zipcode;
        },
        saveEmployee: (state, action) => {
            return {
                ...state,
                employeesData: [...state.employeesData, action.payload]
            }
        },
        setModalBoolean: (state, action) => {
            state.isModalOn = action.payload
        }
    }
})

export const { setEmployee, saveEmployee, setModalBoolean } = employeeSlice.actions;