import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Grid, Typography, Card } from "@mui/material";
import Header from "../components/Header.js";

export default function Home({ mealCategories }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Meal Categories</title>
        <meta
          name="description"
          content="Meal categories you can choose from"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />
      <main className="container mx-auto px-4 py-8 mt-6">
        <h1 className="text-3xl font-bold font-montserrat text-center mb-6">Meal Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"> 
          {mealCategories.map((category) => (
            <Link href={'/categories/' + category.strCategory} key={category.idCategory}>
              <div className="rounded-xl shadow-lg hover:shadow-2xl hover:border border-green-600 overflow-hidden">
                <img
                  className="w-full h-52 object-cover"
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                /> 
                <div className="px-4 py-2">
                  <h3 className="text-xl text-center font-bold">{category.strCategory}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = await (
    await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  ).json();
  const mealCategories = data.categories;

  return {
    props: {
      mealCategories,
    },
  };
}
