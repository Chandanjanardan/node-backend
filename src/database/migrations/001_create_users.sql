CREATE TABLE users(
    id INTEGER GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL ,
    email TEXT NOT NULL ,
    age INTEGER,


    created_at TIMESTAMPTZ 
    NOT NULL 
    DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMPTZ
    NOT NULL
    DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT user_primary_key
        PRIMARY KEY (id),

    CONSTRAINT user_name_valid
        CHECK (
            name = btrim(name)
            AND char_length(name)>=3
        ),

        CONSTRAINT user_email_normilized
            CHECK (
                email = lower(btrim(email))
                AND char_length(email)>0
            ),
        CONSTRAINT user_email_unique
            UNIQUE (email),

        CONSTRAINT users_age_non_negetive
            CHECK (age >=0)
)