import React, { useEffect } from 'react'
import $ from 'jquery';
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { number } from 'yup/lib/locale'
import { useTypedSelector } from '../hooks/useTypedSelector'

function ModalTargetAdd() {
    const validationSchema = yup.object().shape({
        title: yup.string().typeError("Должно быть строкой").required('Обязательное поле'),
        description: yup.string().typeError("Должно быть строкой").required('Обязательное поле'),
        targetTypeId: yup.number().required("Выберите значение типа")
    })
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const dateNow = new Date()
    const date = ('0' + dateNow.getDate()).slice(-2);
    const month = ('0' + (dateNow.getMonth() + 1)).slice(-2);
    const year = dateNow.getFullYear();
    const hours = ('0' + dateNow.getHours()).slice(-2);
    const minutes = ('0' + dateNow.getMinutes()).slice(-2);
    const seconds = ('0' + dateNow.getSeconds()).slice(-2);

    const time = `${date}-${month}-${year}, ${hours}:${minutes}:${seconds}`;

    useEffect(() => {
        // $('#datetimepicker1').datetimepicker();
        // return () => {
        // }
    }, [])

    return (
        <>
            <Modal modelType={CreateTypes.ModalTargetCreate}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Добавить цель</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>

                <Formik


                    initialValues={{
                        title: "",
                        description: "",
                        targetTypeId: 1,
                        operationId: 0,
                        lostTime: time

                    }}
                    validateOnBlur
                    onSubmit={(values) => {
                        activeOperation != null
                            ? values.operationId = activeOperation.id
                            : values.operationId = 0
                        let lostTime = values.lostTime;
                        // // values.lostTime = new Date(values.lostTime)

                        let axiosConfig = {
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                "Access-Control-Allow-Origin": "*",
                            }
                        };
                        try {
                            axios.post(`https://localhost:44330/api/target`, values, axiosConfig)
                                .then(res => console.log(res))
                                .catch(err => console.log('Login: ', err));
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <div className="">
                            <Form>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <input
                                            type={`text`}
                                            className="form-control"
                                            style={{ marginBottom: "10px" }}
                                            id="exampleFormControlInput1"
                                            placeholder="Введите название цели"
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
                                            placeholder="Введите описание цели"
                                            name={`description`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.description}
                                        >
                                        </textarea>
                                        {touched.description && errors.description && <p className="form-error-msg">{errors.description}</p>}
                                    </div>
                                    <div className="form-group">

                                        <label >Тип цели:</label>
                                        <Field
                                            as="select"
                                            name="targetTypeId"
                                            className="form-control"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.targetTypeId}>
                                            <option value="1">Человек</option>
                                            <option value="2">Автомобиль</option>
                                        </Field>
                                        {touched.targetTypeId && errors.targetTypeId && <p className="form-error-msg">{errors.targetTypeId}</p>}
                                    </div>



                                    <div className="form-group">
                                        <label htmlFor="">Дата пропажи:</label>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            id="exampleFormControlInput4"
                                            placeholder="Укажите дату пропажи цели"
                                            name={`lostTime`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lostTime}
                                        >
                                        </input>
                                        {touched.lostTime && errors.lostTime && <p className="form-error-msg">{errors.lostTime}</p>}
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

export default ModalTargetAdd
