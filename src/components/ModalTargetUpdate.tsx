import React, { useEffect } from 'react'
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useTypedSelector } from '../hooks/useTypedSelector'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useActions } from '../hooks/useActions'

export interface ModalTargetUpdateProps {
    TargetId?: number
    TargetForChange: any
}

function ModalTargetUpdate({ TargetId, TargetForChange }: ModalTargetUpdateProps) {
    const validationSchema = yup.object().shape({
        title: yup.string().typeError("Должно быть строкой").required('Обязательное поле'),
        description: yup.string().typeError("Должно быть строкой").required('Обязательное поле'),
        targetTypeId: yup.number().required("Выберите значение типа"),
        targetStatusId: yup.number().required("Выберите значение статуса"),
        lostTime: yup.date().required()
    })

    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { fetchActiveOperations } = useActions()
    let initialValuesUpdate = {
        title: TargetForChange.title,
        description: TargetForChange.description,
        targetTypeId: TargetForChange.targetTypeId,
        targetStatusId: TargetForChange.targetStatusId,
        operationId: TargetForChange.operationId,
        lostTime: TargetForChange.lostTime,
    }

    useEffect(() => {
        fetchActiveOperations()
    }, [])

    console.log(initialValuesUpdate);
    console.log(TargetForChange);


    return (
        <>
            <Modal modelType={CreateTypes.ModalTargetUpdate}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Обновить цель</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>

                <Formik
                    enableReinitialize
                    initialValues={
                        initialValuesUpdate
                    }
                    validateOnBlur
                    onSubmit={ async (values) => {
                        if (activeOperation != null) {
                            values.operationId = activeOperation.id
                        }

                        let axiosConfig = {
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                "Access-Control-Allow-Origin": "*",
                            }
                        };

                        try {
                            await axios.put(`https://localhost:44330/api/target/` + TargetId, values, axiosConfig)
                                .then(res => console.log(res))
                                .catch(err => console.log('Login: ', err));
                        } catch (error) {
                            console.log(error);
                        }

                        setTimeout(fetchActiveOperations(), 100);

                        $("#" + CreateTypes.ModalTargetUpdate).modal('hide')


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
                                        <label>Статус цели:</label>
                                        <Field
                                            as="select"
                                            name="targetStatusId"
                                            className="form-control"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.targetStatusId}>
                                            <option value="1">Найден</option>
                                            <option value="2">Требует проверки!</option>
                                            <option value="3">Не найден</option>
                                        </Field>
                                        {touched.targetStatusId && errors.targetStatusId && <p className="form-error-msg">{errors.targetTypeId}</p>}
                                    </div>

                                    <div className="form-group mt-3 d-flex ">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                id="date-picker-dialog"
                                                name="lostTime"
                                                style={{ width: "100%" }}
                                                label="Дата пропажи"
                                                inputVariant="outlined"
                                                format="dd/MM/yyyy"
                                                value={values.lostTime}
                                                onChange={value => setFieldValue("lostTime", value)}
                                                KeyboardButtonProps={{
                                                    "aria-label": "change date"
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardTimePicker
                                                id="time-picker-dialog"
                                                name="lostTime"
                                                ampm={false}
                                                style={{ width: "100%" }}
                                                label="Время пропажи"
                                                inputVariant="outlined"
                                                value={values.lostTime}
                                                onChange={value => setFieldValue("lostTime", value)}
                                                KeyboardButtonProps={{
                                                    "aria-label": "change date"
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
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
                                        Обновить
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

export default ModalTargetUpdate