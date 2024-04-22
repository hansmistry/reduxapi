import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  // Initialize the useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
  };
  console.log(errors)

  return (
    <div>
      <h1>React Form with useForm Hook</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Input for Name */}
        <div>
          <label>Name:</label>
          <input {...register("fname", { required: true ,message:'Name is required'})} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        
        {/* Input for Email */}
        <div>
          <label>Email:</label>
          <input {...register("email" )} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
// { required: "Email is required", pattern: {value: /^\S+@\S+$/, message: "Invalid email address"} }
export default App;
