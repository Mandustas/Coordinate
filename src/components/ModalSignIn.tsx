import React, { useEffect } from 'react'
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import config from '../config/config.json'
import { useActions } from '../hooks/useActions'




export interface ModalSignInState {

}

function ModalSignIn({ }: ModalSignInState) {
    const { authChange } = useActions()

    const validationSchema = yup.object().shape({
        userName: yup.string()
            .required('Обязательное поле'),
        password: yup.string()
            .required('Обязательное поле')

    })

    let initialValuesCreate = {
        userName: "",
        password: "",
    }

    return (
        <>
            <Modal modelType={CreateTypes.ModalSignIn}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Вход</h5>
                    <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>


                <Formik
                    initialValues={
                        initialValuesCreate
                    }

                    validateOnBlur
                    onSubmit={async (values, { resetForm }) => {
                        let axiosConfig = {
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                "Access-Control-Allow-Origin": "*",
                            }
                        };
                        try {
                            const response = await axios.post(config.AUTH_SERVER_URL + "auth/login", values, axiosConfig)
                            localStorage.setItem("token", response.data.access_token)
                            authChange(true)
                            resetForm({})
                            $("#" + CreateTypes.ModalSignIn).modal('hide')
                            document.location.href = "/"
                        } catch (error) {
                            console.log(error);
                        }


                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue }) => (
                        <div className="">
                            <Form>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <input
                                            type={`text`}
                                            className="form-control"
                                            style={{ marginBottom: "10px" }}
                                            id="exampleFormControlInput1"
                                            placeholder="Логин"
                                            name={`userName`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.userName}
                                        >
                                        </input>
                                        {touched.userName && errors.userName && <p className="form-error-msg">{errors.userName}</p>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type={`password`}
                                            className="form-control"
                                            style={{ marginBottom: "10px" }}
                                            id="exampleFormControlInput1"
                                            placeholder="Пароль"
                                            name={`password`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        >
                                        </input>
                                        {touched.password && errors.password && <p className="form-error-msg">{errors.password}</p>}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Закрыть</button>
                                    <button
                                        type={`submit`}
                                        className="btn btn-dark"
                                        data-dismiss="modal"
                                        disabled={!isValid && !dirty}
                                    >
                                        Войти
                                    </button>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export default ModalSignIn
