import React, { useEffect } from 'react'
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'



export interface ModalObjectAddState {

}

function ModalObjectAdd({ }: ModalObjectAddState) {
    const { x, y } = useTypedSelector(state => state.objectCreate)
    const validationSchema = yup.object().shape({
        title: yup.string().typeError("Должно быть строкой").required('Обязательное поле'),
        description: yup.string().typeError("Должно быть строкой").required('Обязательное поле'),
    })

    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { fetchActiveOperations } = useActions()
    const { fetchDetectedObjects } = useActions()

    let initialValuesCreate = {
        title: "",
        description: "",
        operationId: 0,
        x: x.toString(),
        y: y.toString()
    }

    useEffect(() => {
        fetchActiveOperations()
    }, [])


    return (
        <>
            <Modal modelType={CreateTypes.ModalObjectAdd}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Добавить объект на карту</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>


                <Formik
                    initialValues={
                        initialValuesCreate
                    }

                    validateOnBlur
                    onSubmit={async (values, { resetForm }) => {
                        if (activeOperation != null) {
                            values.operationId = activeOperation.id
                        }
                        let axiosConfig = {
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                "Access-Control-Allow-Origin": "*",
                            }
                        };
                        values.x = x.toString()
                        values.y = y.toString()
                        console.log(values)
                        try {
                            await axios.post(`https://localhost:44330/api/DetectedObject`, values, axiosConfig)

                                .then(res => console.log(res))
                                .catch(err => console.log('Login: ', err));
                            resetForm({})

                        } catch (error) {
                            console.log(error);
                        }
                        setTimeout(fetchDetectedObjects(activeOperation.id), 100);
                        setTimeout(fetchActiveOperations(), 100);


                        $("#" + CreateTypes.ModalObjectAdd).modal('hide')


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
                                            placeholder="Введите название объекта"
                                            name={`title`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.title}
                                        >
                                        </input>
                                        {touched.title && errors.title && <p className="form-error-msg">{errors.title}</p>}
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            aria-multiline={true}
                                            className="form-control"
                                            style={{ marginBottom: "10px" }}
                                            id="exampleFormControlInput2"
                                            placeholder="Введите описание объекта"
                                            name={`description`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.description}
                                        >
                                        </textarea>
                                        {touched.description && errors.description && <p className="form-error-msg">{errors.description}</p>}
                                    </div>

                                    {/* <div className="form-group">
                                        <label>Координаты:</label>
                                        <div className="d-flex">
                                            <div className="col d-flex align-items-center">
                                                <label htmlFor="" style={{ margin: "10px" }}>N: </label>
                                                <input
                                                    type={`x`}
                                                    // disabled
                                                    className="form-control"
                                                    style={{ marginBottom: "10px" }}
                                                    name={`x`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.x}
                                                >
                                                </input>
                                            </div>
                                            <div className="col d-flex align-items-center">
                                                <label htmlFor="" style={{ margin: "10px" }}>W: </label>
                                                <input
                                                    type={`y`}
                                                    // disabled
                                                    className="form-control"
                                                    style={{ marginBottom: "10px" }}
                                                    name={`y`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.y}
                                                >
                                                </input>
                                            </div>
                                        </div>
                                    </div> */}

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

export default ModalObjectAdd
