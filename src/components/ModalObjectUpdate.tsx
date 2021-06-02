import React, { useEffect } from 'react'
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import config from '../config/config.json'
import axios from 'axios'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Select from 'react-select'

export interface ModalObjectAddUpdate {

}

function ModalObjectUpdate({ }: ModalObjectAddUpdate) {
    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { detectedObject } = useTypedSelector(state => state.objectUpdate)
    const { fetchActiveOperations } = useActions()
    const { fetchDetectedObjects } = useActions()
    let initialValues;
    initialValues = {
        title: detectedObject != null ? detectedObject.title : "",
        description: detectedObject != null ? detectedObject.description : "",
        mission: { value: detectedObject.missionId, label: detectedObject.missionId != null ? "Миссия назначена" : "Миссия не назначена" },
        isDesired: detectedObject != null ? detectedObject.isDesired : false,
    }

    const validationSchema = yup.object().shape({
        title: yup.string().typeError("Должно быть строкой").required('Обязательное поле'),
        description: yup.string().typeError("Должно быть строкой").required('Обязательное поле'),

    })

    let missionsToSelect: Array<{ value: number, label: string }> = []
    missionsToSelect.push({ label: "Нет миссии", value: 9999999999 })

    if (activeOperation != null) {
        activeOperation.users.forEach((user: any) => {
            user.missions.forEach((mission: any) => {
                missionsToSelect.push({ label: "#" + mission.id + " " + user.firstName + " " + user.secondName, value: mission.id })
            });
        });
    }

    useEffect(() => {
        fetchActiveOperations()
    }, [])


    return (
        <>
            <Modal modelType={CreateTypes.ModalObjectUpdate}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Редактировать объект</h5>
                    <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>


                <Formik
                    enableReinitialize
                    initialValues={
                        initialValues
                    }

                    validateOnBlur
                    onSubmit={async (values, { resetForm }) => {

                        let axiosConfig = {
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                "Access-Control-Allow-Origin": "*",
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        };


                        let valuesValid = {
                            title: values.title,
                            description: values.description,
                            missionId: values.mission.value == 9999999999 ? null : values.mission.value,
                            isDesired: values.isDesired
                        }
                        try {
                            await axios.put(config.API_SERVER_URL + 'DetectedObject/' + detectedObject.id, valuesValid, axiosConfig)

                                .then(res => console.log(res))
                                .catch(err => console.log('Login: ', err));
                            resetForm({})

                        } catch (error) {
                            console.log(error);
                        }
                        setTimeout(fetchDetectedObjects(activeOperation.id), 100);
                        setTimeout(fetchActiveOperations(), 100);
                        $("#" + CreateTypes.ModalObjectUpdate).modal('hide')
                    }}

                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue }) => (
                        <div className="">
                            <Form>
                                <div className="modal-body" style={{ height: "400px" }}>
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

                                    <div className="form-group">
                                        <label>Миссия:</label>
                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            // defaultValue={missionsToSelect != null ? missionsToSelect[0] : null}
                                            isClearable={true}
                                            isRtl={false}
                                            isSearchable={true}
                                            name="mission"
                                            options={missionsToSelect}
                                            onChange={option => setFieldValue("mission", option)}
                                            onBlur={handleBlur}
                                            value={values.mission}
                                            maxMenuHeight={200}
                                        />
                                    </div>

                                    <div className="form-check form-switch detected-object-is-desired">
                                        <Field
                                            type={"checkbox"}
                                            name={"isDesired"}
                                            className={"form-check-input"}
                                            id={"DetectedObjectIsDesired"}
                                        >

                                        </Field>
                                        <label className="form-check-label" htmlFor="DetectedObjectIsDesired">
                                            Проверен
                                         </label>
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

export default ModalObjectUpdate
