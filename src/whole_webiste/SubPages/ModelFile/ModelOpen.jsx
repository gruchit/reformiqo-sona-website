import React, { useEffect, useRef, useState } from 'react'; 
import '../Production Supervisor/ProductionSup.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IoClose } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function ModelOpen({ isOpen, onClose }) {
    const form = useRef(null);

    const [formData, setFormData] = useState({
        FullName: "",
        EmailAdd: "",
        PhoneNum: "",
        JobOption: "",
        RoleApply: "",
    });

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const jobOptions = [
        { label: 'Full-Time' },
        { label: 'Part-Time' },
        { label: 'Permanent' },
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (e.target.className === 'UserApply') {
            onClose();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleJobOptionChange = (_, value) => {
        setFormData((prevData) => ({
            ...prevData,
            JobOption: value?.label || "",
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_ks3304p', // Your Service ID
                'template_95hwkuz', // Your Template ID
                {
                    FullName: formData.FullName,
                    EmailAdd: formData.EmailAdd,
                    PhoneNum: formData.PhoneNum,
                    JobOption: formData.JobOption,
                    RoleApply: formData.RoleApply,
                },
                'Qk0_E3SJIJrgBigQF' 
            )
            .then(
                (result) => {
                    // console.log('SUCCESS!', result.text);
                    setFormData({
                        FullName: "",
                        EmailAdd: "",
                        PhoneNum: "",
                        JobOption: "",
                        RoleApply: "",
                    });
                    setSnackbar({
                        open: true,
                        message: "Email sent successfully!",
                        severity: "success",
                    });
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setSnackbar({
                        open: true,
                        message: "Failed to send email. Please try again later.",
                        severity: "error",
                    });
                }
            );
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <div className="UserApply" onClick={handleOutsideClick}>
            <div className="UserApplyForm" onClick={(e) => e.stopPropagation()}>
                <div className="CloseButtonMade">
                    <button onClick={onClose} className="btn border-0 p-1">
                        <IoClose className="fs-1" />
                    </button>
                </div>
                <div className="border-1">
                    <form
                        className="flex-column"
                        style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <TextField
                            label="Full Name"
                            name="FullName"
                            value={formData.FullName}
                            onChange={handleInputChange}
                            variant="outlined"
                            required
                            fullWidth
                        />
                        <TextField
                            label="Email Address"
                            name="EmailAdd"
                            value={formData.EmailAdd}
                            onChange={handleInputChange}
                            variant="outlined"
                            required
                            fullWidth
                            type="email"
                            inputProps={{
                                autoComplete: 'off',
                                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                            }}
                            error={
                                formData.EmailAdd &&
                                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.EmailAdd)
                            }
                            helperText={
                                formData.EmailAdd &&
                                    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.EmailAdd)
                                    ? "Please enter a valid email address"
                                    : ""
                            }
                        />
                        <TextField
                            label="Phone Number"
                            name="PhoneNum"
                            value={formData.PhoneNum}
                            onChange={handleInputChange}
                            variant="outlined"
                            required
                            fullWidth
                            type="tel"
                            inputProps={{
                                autoComplete: 'off',
                                maxLength: 10,
                                pattern: "[0-9]*",
                            }}
                            onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }}
                        />
                         <Autocomplete
                            disablePortal
                            required
                            options={jobOptions}
                            value={jobOptions.find((option) => option.label === formData.JobOption) || null}
                            onChange={handleJobOptionChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Job Type"
                                    required
                                    variant="outlined"
                                />
                            )}
                        />
                        <TextField
                            label="Role Applying For"
                            name="RoleApply"
                            value={formData.RoleApply}
                            onChange={handleInputChange}
                            variant="outlined"
                            required
                            fullWidth
                        />
                        <div className="ApplyForThe_Btn m-auto">
                            <button type="submit" className="btn">
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbar.severity}
                    variant="filled"
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default ModelOpen;