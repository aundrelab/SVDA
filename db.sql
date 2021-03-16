CREATE TABLE User(
    user_id INT NOT NULL AUTO_INCREMENT,
    user_email VARCHAR(384),
    user_password VARCHAR(128),

    PRIMARY KEY(user_id)
);

CREATE TABLE Adminstrator(
    admin_id INT NOT NULL AUTO_INCREMENT,
    admin_email VARCHAR(384),

    PRIMARY KEY(admin_id);
)

CREATE TABLE Father(
    father_id INT NOT NULL AUTO_INCREMENT,
    father_first_name VARCHAR(64),
    father_last_name VARCHAR(64),
    father_phone_number VARCHAR(10),
    father_email VARCHAR(384),

    PRIMARY KEY(father_id)
);

CREATE TABLE Mother(
    mother_id INT NOT NULL AUTO_INCREMENT,
    mother_first_name VARCHAR(64),
    mother_last_name VARCHAR(64),
    mother_phone_number VARCHAR(10),
    mother_email VARCHAR(384),

    PRIMARY KEY(mother_id)
);

CREATE TABLE Guardian(
    guardian_id INT NOT NULL AUTO_INCREMENT,
    guardian_name VARCHAR(128),
    guardian_email VARCHAR(384),
    guardian_phone_number VARCHAR(10),

    PRIMARY KEY(guardian_id)
);

CREATE TABLE Student(
    student_id INT NOT NULL AUTO_INCREMENT,
    student_email VARCHAR(384),
    student_first_name VARCHAR(64),
    student_middle_name VARCHAR(64),
    student_last_name VARCHAR(64),
    student_phone_number VARCHAR(10),
    father_id INT,
    mother_id INT,
    guardian_id INT,
    student_grade INT,
    student_status VARCHAR(64),

    PRIMARY KEY(student_id),
    FOREIGN KEY(father_id) REFERENCES Father (father_id) ON DELETE CASCADE,
    FOREIGN KEY(mother_id) REFERENCES Mother (mother_id) ON DELETE CASCADE,
    FOREIGN KEY(guardian_id) REFERENCES Guardian (guardian_id) ON DELETE CASCADE
);