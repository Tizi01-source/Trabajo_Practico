function Aviso({ avisos }) {
    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            {avisos.map(aviso => (
                <div key={aviso.id} className={`toast show border-0 mb-2 text-bg-${aviso.tipo}`} role="status" aria-live="polite">
                    <div className="toast-body">{aviso.texto}</div>
                </div>
            ))}
        </div>
    )
}

export default Aviso