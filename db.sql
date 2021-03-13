CREATE TABLE Student(
    student_id INT NOT NULL,
    student_email VARCHAR(384),
    student_first_name VARCHAR(64),
    student_middle_name VARCHAR(64),
    student_last_name VARCHAR(64),
    student_phone_number VARCHAR(10),
    father_id INT NOT NULL,
    mother_id INT NOT NULL,
    guardian_id INT NOT NULL,
    student_grade INT,
    student_status VARCHAR(64),

    PRIMARY KEY(student_id),
     
);

CREATE TABLE Father(
    father_id INT NOT NULL,
    father_first_name VARCHAR(64),
    father_last_name VARCHAR(64),
    father_phone_number VARCHAR(10),
    father_email VARCHAR(384),

    PRIMARY KEY(father_id)
);

CREATE TABLE Mother(
    mother_id INT NOT NULL,
    mother_first_name VARCHAR(64),
    mother_last_name VARCHAR(64),
    mother_phone_number VARCHAR(10),
    mother_email VARCHAR(384),

    PRIMARY KEY(mother_id)
);

CREATE TABLE Guardian(
    guardian_id INT NOT NULL,
    guardian_name VARCHAR(128),
    guardian_email VARCHAR(384),
    guardian_phone_number VARCHAR(10),

    PRIMARY KEY(guardian_id)
);