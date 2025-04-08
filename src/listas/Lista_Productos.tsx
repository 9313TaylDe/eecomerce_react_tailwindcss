import { useState } from "react";

export const ListaProdutos = [
  {
    categoria: "eletrônicos",
    subprodutos: [
      {
        id: 1,
        price: 120.0,
        title: "Multímetro Digital Automotivo",
        image:
          "https://m.media-amazon.com/images/I/61O0rX8x+PL._AC_SL1000_.jpg",
      },
      {
        id: 2,
        price: 150.0,
        title: "Amperímetro Digital True-RMS",
        image:
          "https://m.media-amazon.com/images/I/61z+4ZL1+LL._AC_SL1000_.jpg",
      },
      {
        id: 3,
        price: 300.0,
        title: "Motor Elétrico Trifásico 2CV",
        image:
          "https://m.media-amazon.com/images/I/71q0IY6ZxLL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        price: 200.0,
        title: "Bateria Estacionária 12V 100Ah",
        image:
          "https://m.media-amazon.com/images/I/71c5cL7ZzPL._AC_SL1500_.jpg",
      },
    ],
  },
  {
    categoria: "videogame",
    subprodutos: [
      {
        id: 3,
        price: 120.0,
        title: "Playstation 4",
        image: "../assets/react.svg",
      },
      {
        id: 4,
        price: 150.0,
        title: "XBOX ONE S",
        image: "../assets/react.svg",
      },
    ],
  },
  {
    categoria: "tenis",
    subprodutos: [
      {
        id: 5,
        price: 120.0,
        title: "Tênis Adidas",
        image: "../assets/react.svg",
      },
      {
        id: 6,
        price: 150.0,
        title: "Tênis Nike",
        image: "../assets/react.svg",
      },
    ],
  },
  {
    categoria: "camisas",
    subprodutos: [
      {
        id: 7,
        price: 120.0,
        title: "Camisa PENA",
        image: "../assets/react.svg",
      },
      {
        id: 8,
        price: 150.0,
        title: "Camisa Nike",
        image: "../assets/react.svg",
      },
    ],
  },
  {
    categoria: "notebook",
    subprodutos: [
      {
        id: 9,
        price: 120.0,
        title: "Notebook Dell",
        image: "../assets/react.svg",
      },
      {
        id: 10,
        price: 150.0,
        title: "Notebook Samsung",
        image: "../assets/react.svg",
      },
      {
        id: 11,
        price: 150.0,
        title: "Notebook LG",
        image: "../assets/react.svg",
      },
      {
        id: 12,
        price: 150.0,
        title: "Notebook Razer",
        image: "../assets/react.svg",
      },
    ],
  },
];

export const categoriasMapeadas = {
  tenis: "tenis",
  notebook: "notebook",
  camisa: "camisas",
  videogame: "videogame",
};

export const CardProduto = ({ produto }) => (
  <div className="border p-2 flex max-w-[29%] w-[22%] h-[143px]">
    <img src={produto.image} alt={produto.title} className="w-[90%] border" />
    <div>
      <h3>{produto.title}</h3>
      <p>R${produto.price.toFixed(2)}</p>
    </div>
  </div>
);

export const AllCards = () => {
  return (
    <div className="flex flex-wrap h-fit p-1 w-full gap-2 items-center  justify-between">
      {ListaProdutos.map((produto) =>
        produto.subprodutos.map((subprodutos) => (
          <div
            className="border flex p-2 max-w-[29%] w-[22%] max-h-[70%] h-[143px]"
            key={subprodutos.id}
          >
            <img
              className="w-[90%] border"
              src={subprodutos.image}
              alt={subprodutos.title}
            />
            <div className="w-[80%]">
              <h2 className="text-xs w-full">{subprodutos.title}</h2>
              <p className="w-full">R$ {subprodutos.price.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
