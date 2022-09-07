--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0 (Debian 13.0-4)
-- Dumped by pg_dump version 13.2 (Debian 13.2-1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: mike-savy
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


ALTER TABLE public.alembic_version OWNER TO "mike-savy";

--
-- Name: categories; Type: TABLE; Schema: public; Owner: mike-savy
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    type character varying
);


ALTER TABLE public.categories OWNER TO "mike-savy";

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: mike-savy
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO "mike-savy";

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mike-savy
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: mike-savy
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying,
    content character varying,
    like_count integer,
    category_id integer
);


ALTER TABLE public.posts OWNER TO "mike-savy";

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: mike-savy
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO "mike-savy";

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mike-savy
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: mike-savy
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying,
    last_name character varying,
    nick_name character varying,
    disable_account boolean,
    facebook_link character varying,
    "linkedIn_link" character varying,
    instagram_link character varying,
    github_link character varying,
    role character varying
);


ALTER TABLE public.users OWNER TO "mike-savy";

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: mike-savy
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO "mike-savy";

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mike-savy
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: mike-savy
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: mike-savy
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: mike-savy
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: mike-savy
--

COPY public.alembic_version (version_num) FROM stdin;
4071abfd7a77
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: mike-savy
--

COPY public.categories (id, type) FROM stdin;
1	Politics
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: mike-savy
--

COPY public.posts (id, title, content, like_count, category_id) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: mike-savy
--

COPY public.users (id, first_name, last_name, nick_name, disable_account, facebook_link, "linkedIn_link", instagram_link, github_link, role) FROM stdin;
1	johnWhy	mike	fan	t	https://me	https://me	https://	https://me	user
2	Sammy	Lewis	lewisCreed	f	https://me	https://me	https://	https://me	user
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mike-savy
--

SELECT pg_catalog.setval('public.categories_id_seq', 2, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mike-savy
--

SELECT pg_catalog.setval('public.posts_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mike-savy
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: mike-savy
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: mike-savy
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: mike-savy
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: users users_nick_name_key; Type: CONSTRAINT; Schema: public; Owner: mike-savy
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_nick_name_key UNIQUE (nick_name);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: mike-savy
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: posts posts_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: mike-savy
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- PostgreSQL database dump complete
--

