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

const CreatePost = ({ addPost }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const handlePostSubmit = (values, { resetForm }) => {
    if (addPost) addPost(values);
    resetForm();
    closeModal();
  };

  return (
    <div className={styles.createPostCard}>
      <div className={styles.inputArea}>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="user"
          className={styles.userAvatar}
        />
        <button type="button" className={styles.iconBtn} onClick={openModal}>
          <span className={styles.btnTxt}>Add Post</span>
        </button>
      </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
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
                <Form className={styles.formLayout}>
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
  addPost: PropTypes.func.isRequired,
};

export default CreatePost;