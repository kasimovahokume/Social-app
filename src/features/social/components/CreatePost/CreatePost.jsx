import { useState } from "react";
import styles from "./CreatePost.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const PostSchema = Yup.object().shape({
  fullName: Yup.string().required("Ad mütləqdir"),
  content: Yup.string().required("Məzmun mütləqdir"),
  image: Yup.string()
    .url("Düzgün şəkil linki qoyun")
    .required("Şəkil linki mütləqdir"),
});

const CreatePost = ({ onPostCreate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handlePostSubmit = (values, { resetForm }) => {
    if (onPostCreate) {
      onPostCreate({
        id: Date.now(),
        userName: values.fullName,
        text: values.content,
        image: values.image,
        date: "İndi"
      });
    }
    resetForm();
    closeModal();
  };

  return (
    <div className={styles.createPostWrapper}>
      <div className={styles.inputArea}>
         <button type="button" className={styles.iconBtn} onClick={openModal}>
           <span className={styles.btnTxt}>Add Post</span>
         </button>
       </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Create post</h3>
              <button className={styles.closeX} onClick={closeModal}>✕</button>
            </div>

            <Formik
              initialValues={{ fullName: "", content: "", image: "" }}
              validationSchema={PostSchema}
              onSubmit={handlePostSubmit}
            >
              {() => (
                <Form className={styles.formLayout} style={{width: '100%'}}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Full Name</label>
                    <Field
                      name="fullName"
                      placeholder="Adınızı daxil edin"
                      className={styles.modalInput}
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Image</label>
                    <Field
                      name="image"
                      placeholder="https://example.com/photo.jpg"
                      className={styles.modalInput}
                    />
                    <ErrorMessage
                      name="image"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Content</label>
                    <Field
                      as="textarea"
                      name="content"
                      placeholder="Nə düşünürsünüz?"
                      className={styles.modalTextarea}
                    />
                    <ErrorMessage
                      name="content"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Post
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

CreatePost.propTypes = {
  onPostCreate: PropTypes.func.isRequired,
};

export default CreatePost;