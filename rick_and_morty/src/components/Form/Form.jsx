/* eslint-disable jsx-a11y/alt-text */
import styles from './Form.module.css';
import {NavLink} from 'react-router-dom'; 
import {useForm} from './useForm'

  

export default function Form(){
    
    const initialForm={
        name:'',
        email:'',
        feedback:'',
        description:''
    };

    const validationsForm=(form) => {
        let errors={}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexComments = /^.{1,255}$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

        if(!form.name.trim()){
            errors.name = '¡Name Must Be Required!'
        }else if(!regexName.test(form.name.trim())){
            errors.name = 'Name only accepts letters and spaces'
        }
        if(!form.email.trim()){
            errors.email = '¡Email Must Be Required!'
        }else if(!regexEmail.test(form.email.trim())){
            errors.email = 'Email must be valid'
        }
        if(!form.feedback.trim()){
            errors.feedback = '¡Feedback Must Be Required!'
        }else if(!regexName.test(form.feedback.trim())){
            errors.feedback = 'Feedback only accepts letters and spaces'
        }
        if(!form.description.trim()){
            errors.description = '¡Description Must Be Required!'
        }else if(!regexComments.test(form.description.trim())){
            errors.description = 'Description must not exceed 255 characters'
        }

        return errors;
    };

    const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm,validationsForm);

    

    return(
        <div className={styles.container}>
            <div className={styles.fondo}></div>
            <div className={styles.tab}>
                <div className={styles.nav}>
                    <nav>
                          
                        <NavLink to='/home' className={styles.navLink}>
 
                            <img className={styles.imgToHome}/>
                            <p className={styles.pToHome}>home</p>  
                        </NavLink>
                        
                        <h2 >contact me via email</h2> 
                        
                    </nav>
                </div>
                
                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit} >

                        <label>
                           name   
                        </label>
                            <input 
                            type='text' 
                            name='name' 
                            placeholder='Insert your name' 
                            onChange={handleChange} 
                            value={form.name}  
                            required  
                            onBlur={handleBlur} 
                            ></input>
                        {errors.name && <p className={styles.error}>{errors.name}</p>}
                        <label>
                            email
                        </label>
                            <input 
                            type='email' 
                            name='email' 
                            placeholder='Insert your email...' 
                            onChange={handleChange} 
                            value={form.email} 
                            required  
                            onBlur={handleBlur}
                            ></input>
                        {errors.email && <p className={styles.error}>{errors.email}</p>}
                        <label>
                            feedback
                        </label>
                            <input 
                            type='text' 
                            name='feedback' 
                            placeholder='Send your feedback...' 
                            onChange={handleChange} 
                            value={form.feedback} 
                            required 
                            onBlur={handleBlur} 
                            ></input>
                        {errors.feedback && <p className={styles.error}>{errors.feedback}</p>}
                      
                        <label>
                            description
                        </label>
                        <textarea 
                        type='text' 
                        name='description' 
                        placeholder='Add comments about my work'  
                        className={styles.textArea} 
                        onChange={handleChange} 
                        value={form.description} 
                        required 
                        onBlur={handleBlur}>
                        </textarea>
                        {errors.description && <p className={styles.error}>{errors.description}</p>}
                        <input 
                        className={styles.confirmar}
                        type='submit' 
                        value='submit'>
                        </input>

                    </form>
                </div>
            </div>
        </div>
    )

}
 