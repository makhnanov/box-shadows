export default function (shadows) {
    const styles = shadows
        .filter((s) => s.active)
        .map((s) => {
            let prefix = s.inset ? 'inset ' : ''
            const offsetX = Number(s.offsetX) ? `${s.offsetX}px` : `0`;
            const offsetY = Number(s.offsetY) ? `${s.offsetY}px` : `0`;
            const blur = Number(s.blur) ? `${s.blur}px` : `0`;
            const spread = Number(s.spread) ? `${s.spread}px` : `0`;
            return `${prefix}${offsetX} ${offsetY} ${blur} ${spread} ${s.color}`
        })
        .join(',')
        .trim()

    return `box-shadow: ${styles};`
}
