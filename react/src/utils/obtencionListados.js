import axiosClient from "../axios-client";

function obtenerListaUsuarios(setCargando, setListaUsuarios, paginaActual, setMeta) {
    axiosClient
        .get(`/usuarios?page=${paginaActual}`)
        .then(({ data }) => {
            setCargando(false);
            setListaUsuarios(data.data);
            setMeta(data.meta)
        })
        .catch(() => {
            setCargando(false);
        });
}

function obtenerListaProductos(setCargando, setListaProductos, paginaActual, setMeta) {
    axiosClient
        .get(`/productos?page=${paginaActual}`)
        .then(({ data }) => {
            setCargando(false);
            setListaProductos(data.data);
            setMeta(data.meta)
        })
        .catch(() => {
            setCargando(false);
        });
}

function obtenerListaTiposPescado(setCargando,setListaTiposPescado) {
    axiosClient
        .get("/tiposPescado")
        .then(({ data }) => {
            setCargando(false);
            setListaTiposPescado(data.data);
        })
        .catch(() => {
            setCargando(false);
        });
}

function obtenerListaFormatosVenta(setCargando,setListaFormatosVenta) {
    axiosClient
        .get("/formatosVenta")
        .then(({ data }) => {
            setCargando(false);
            setListaFormatosVenta(data.data);
        })
        .catch(() => {
            setCargando(false);
        });
}

function obtenerListaTiposEscamado(setCargando,setListaTiposEscamados) {
    axiosClient
        .get("/tiposEscamado")
        .then(({ data }) => {
            setCargando(false);
            setListaTiposEscamados(data.data);
        })
        .catch(() => {
            setCargando(false);
        });
}

function obtenerListaPaises(setCargando,setListaPaises) {
    axiosClient
        .get("/paises")
        .then(({ data }) => {
            setCargando(false);
            setListaPaises(data.data);
        })
        .catch(() => {
            setCargando(false);
        });
}

function obtenerListaTiendas(setCargando,setListaTiendas) {
    axiosClient
        .get("/tiendas")
        .then(({ data }) => {
            console.log(data);
            setCargando(false);
            setListaTiendas(data.data);
        })
        .catch(() => {
            setCargando(false);
        });
}

export { obtenerListaUsuarios, obtenerListaProductos, obtenerListaTiposPescado, obtenerListaFormatosVenta, obtenerListaTiposEscamado, obtenerListaPaises, obtenerListaTiendas };