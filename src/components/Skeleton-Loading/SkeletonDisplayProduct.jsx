import Skeleton from "./Skeleton";
import './Skeleton.css';

const SkeletonDisplayProduct = ({ classes }) => {
    return (
        <div className="skeleton-section">
            <section className="skeleton-text-0">
                <Skeleton classes='picture width-50' />
                <div className="width-div">
                    <Skeleton classes='width-100 text' />
                </div>
            </section>
            <Skeleton classes='width-100 button' />
        </div>
    )
}

const skeletonSets = Array.from({ length: 10 }).map(() => (
    [...Array(10)].map((_, i) => <SkeletonDisplayProduct key={i} />)
));

export default SkeletonDisplayProduct
export { skeletonSets }