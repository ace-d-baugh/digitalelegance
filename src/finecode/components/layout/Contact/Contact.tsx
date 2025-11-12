// components/Contact/Contact.tsx

import { useState, type FormEvent, type ChangeEvent } from 'react';
import Button from '../../common/Button/Button';
import './Contact.css';

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	subject?: string;
	message?: string;
}

function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

	const validateField = (name: string, value: string): string | undefined => {
		switch (name) {
			case 'name':
				if (!value.trim()) return 'Name is required';
				if (value.trim().length < 3) return 'Name must be at least 3 characters';
				if (/<|>|script|javascript|eval|onclick/i.test(value)) return 'Invalid characters detected';
				return undefined;

			case 'email':
				if (!value.trim()) return 'Email is required';
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(value)) return 'Please enter a valid email address';
				return undefined;

			case 'subject':
				if (!value.trim()) return 'Subject is required';
				if (/<|>|script|javascript|eval|onclick/i.test(value)) return 'Invalid characters detected';
				return undefined;

			case 'message':
				if (!value.trim()) return 'Message is required';
				if (/<|>|script|javascript|eval|onclick/i.test(value)) return 'Invalid characters detected';
				return undefined;

			default:
				return undefined;
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Clear error for this field when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
		setSubmitStatus(null);
	};

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		Object.keys(formData).forEach((key) => {
			const error = validateField(key, formData[key as keyof FormData]);
			if (error) {
				newErrors[key as keyof FormErrors] = error;
			}
		});

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			// Create mailto link with form data
			const mailtoLink = `mailto:ace@digitalelegance.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
				`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
			)}`;

			window.location.href = mailtoLink;

			setSubmitStatus('success');
			setFormData({ name: '', email: '', subject: '', message: '' });
		} catch (error) {
			console.error('Error sending email:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="Contact">
			<h2>CONTACT</h2>

			<form className="contact-form" onSubmit={handleSubmit} noValidate>
				<div className="form-group">
					<label htmlFor="name">Name *</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className={errors.name ? 'error' : ''}
						disabled={isSubmitting}
					/>
					{errors.name && <span className="error-message">{errors.name}</span>}
				</div>

				<div className="form-group">
					<label htmlFor="email">Email *</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className={errors.email ? 'error' : ''}
						disabled={isSubmitting}
					/>
					{errors.email && <span className="error-message">{errors.email}</span>}
				</div>

				<div className="form-group">
					<label htmlFor="subject">Subject *</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						className={errors.subject ? 'error' : ''}
						disabled={isSubmitting}
					/>
					{errors.subject && <span className="error-message">{errors.subject}</span>}
				</div>

				<div className="form-group">
					<label htmlFor="message">Message *</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						className={errors.message ? 'error' : ''}
						rows={6}
						disabled={isSubmitting}
					/>
					{errors.message && <span className="error-message">{errors.message}</span>}
				</div>

				{submitStatus === 'success' && <div className="success-message">Your email client has been opened. Please send the message.</div>}
				{submitStatus === 'error' && <div className="error-message">There was an error. Please try again.</div>}

				<div className="Contact-btn">
					<Button text={isSubmitting ? 'Sending...' : 'Send'} link={''} />
				</div>
			</form>
		</div>
	);
}

export default Contact;
