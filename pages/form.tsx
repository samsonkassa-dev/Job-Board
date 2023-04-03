import React, { useState } from 'react';

interface Applicant {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: File | null;
}

const JobApplicationForm: React.FC = () => {
  const [applicant, setApplicant] = useState<Applicant>({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setApplicant({ ...applicant, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setApplicant({ ...applicant, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(applicant); // TODO: submit the form data to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={applicant.name} onChange={handleInputChange} required />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={applicant.email} onChange={handleInputChange} required />
      </label>

      <label>
        Phone:
        <input type="tel" name="phone" value={applicant.phone} onChange={handleInputChange} required />
      </label>

      <label>
        Position:
        <select name="position" value={applicant.position} onChange={handleInputChange} required>
          <option value="">--Select Position--</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
        </select>
      </label>

      <label>
        Resume:
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileInputChange} required />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;