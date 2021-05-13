import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import Modal from "./Modal"
import { CreateTypes } from "./ReviewPage"
import axios from 'axios'

function ModalOperationCreate() {
    const validationSchema = yup.object().shape({
        title: yup.string().typeError("Должно быть строкой").required('Обязательное поле')
    })

    return (
        <>
            <Modal modelType={CreateTypes.ModalOperationAdd}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Создать операцию</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>

                <Formik
                    initialValues={{
                        title: ""
                    }}
                    validateOnBlur
                    onSubmit={(values) => {

                        let axiosConfig = {
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                "Access-Control-Allow-Origin": "*",
                            }
                        };
                        try {
                            axios.post(`https://localhost:44330/api/operation`, values, axiosConfig)
                                .then(res => console.log(res))
                                .catch(err => console.log('Login: ', err));
                        } catch (error) {
                            console.log(error);
                        }
                        document.location.href = "/operation/review";
                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <div className="">
                            <Form>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <div className="">
                                            <input
                                                type={`text`}
                                                className="form-control border border-dark"
                                                id="exampleFormControlInput1"
                                                placeholder="Введите название операции"
                                                name={`title`}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.title}

                                            >
                                            </input>
                                            {touched.title && errors.title && <p className="form-error-msg">{errors.title}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                                    <button
                                        type={`submit`}
                                        className="btn btn-dark"
                                        data-dismiss="modal"
                                        disabled={!isValid && !dirty}
                                    >
                                        Создать
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

export default ModalOperationCreate
