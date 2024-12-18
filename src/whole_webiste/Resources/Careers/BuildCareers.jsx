import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IoLocationOutline } from "react-icons/io5";
import './Careers.css';
import AOS from 'aos';
import { useEffect } from 'react';
// Sample Data for Autocomplete Suggestions
const jobOptions = [
  { label: 'Full-Time' },
  { label: 'Part-Time' },
  { label: 'Permanent' },
  { label: 'Permanent' },
];

const categoryOptions = [
  { label: 'Production, Manufacturing & Engineering' },
  { label: 'Quality Control / Quality Assurance' },
];

function BuildCareers() {
  useEffect(() => {
    AOS.init({
      once: true, // Prevent animations from replaying
    });
  }, []);
  return (
    <>
      <div className="BuildCareers">
        <div className="BuildCareers_Detalis flex-column text-center" data-aos="zoom-in-up" data-aos-offset="200">
          <h1 className="sans_bold mb-5">Build Your Career</h1>
          <p className="sans_light text-secondary">
            Sona Extrusion is a great place to kickstart your career. You will contribute to our
            business from day one and get access to build your skills for your future. You’ll also
            collaborate with global teams, take advantage of opportunities – all in a dynamic
            environment filled with industry experts.
          </p>
          <p className="sans_light text-secondary">
            We take our responsibilities as an employer very seriously. We take good care of our new
            employees, but we also challenge them from the very beginning by giving them
            responsibilities very quickly.
          </p>
        </div>
        <div className="BuildCareersForm" data-aos="zoom-in-up" data-aos-offset="200">
          <form action="">
            <div className="flex-column row-gap-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="CityInputWrapper">
                  <TextField
                    id="outlined-basic"
                    label="City, State or Pin code"
                    variant="outlined"
                    className="CityInput"
                     autoComplete="off"
                  />
                  <IoLocationOutline className="location-icon" />
                </div>
                <button type="button" className="btn BuildBTN text-white">
                  Find Job
                </button>
              </div>
              <div className="d-flex justify-content-between gap-3 mt-3">
                {/* Job Type Autocomplete */}
                <Autocomplete
                  disablePortal
                  options={jobOptions}
                  className='BuldjobInput'
                  sx={{ width: '100%',zIndex: 10   }}
                  renderInput={(params) => (
                    <TextField {...params} label="Job Type" variant="outlined" className="BuildJob " sx={{ zIndex: 10  }}/>
                  )}
                />

                {/* Category Autocomplete */}
                <Autocomplete
                  disablePortal
                  options={categoryOptions}
                  className='CategoryjobInput'
                  sx={{ width: '100%' }}
                  renderInput={(params) => (
                    <TextField {...params} label="Category" variant="outlined" className="BuildCategory" sx={{ zIndex: 10  }}/>
                  )}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BuildCareers;
