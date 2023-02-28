import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import * as Yup from "yup";

import { ButtonVariants } from "../../types/ButtonVariants";
import Button from "../button/Button";

// import "./sectionFeedback.scss";

interface IFeedbackFormValues {
	email: string;
}

const SectionFeedback: React.FC = () => {
	const initialValues: IFeedbackFormValues = { email: "" };
	return (
		<div className="section-feedback">
			<div className="container">
				<div className="section-feedback__inner">
					<div className="section-feedback__content">
						<h2 className="section-feedback__title">Прайс для партнерів</h2>
						<p className="section-feedback__subtitle">Залиште контакти і ми вас наберемо</p>
					</div>
					<div className="section-feedback__form">
						<Formik
							initialValues={initialValues}
							validationSchema={Yup.object().shape({
								email: Yup.string().email("Здається, ви щось загубили...").required("Обов'язкове поле"),
							})}
							onSubmit={(values, actions) => {
								actions.resetForm();
							}}
						>
							{(props: FormikProps<any>) => (
								<Form className="form-feedback">
									<div className="form-feedback__body">
										<Field
											className="form-feedback__input"
											name="email"
											placeholder="Email"
											data-error={!!props.errors.email}
										/>
										<Button
											className="form-feedback__button"
											title="Відправити"
											variant={ButtonVariants.formSubmit}
										/>
										<ErrorMessage className="form-feedback__error" name="email" component="div" />
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionFeedback;
