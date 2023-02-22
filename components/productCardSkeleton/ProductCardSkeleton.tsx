import React from "react";
import Skeleton from "@mui/material/Skeleton";

import { viewportWidthContext } from "../../context/viewportWidthContext";

// import styles from "./productCardSkeleton.module.scss";

const ProductCardSkeleton: React.FC = () => {
	const { isMobile } = React.useContext(viewportWidthContext);
	return (
		<div
			className="product-card-skeleton"
			aria-hidden="true"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				minHeight: isMobile ? "33.5rem" : "42rem",
			}}
		>
			{isMobile ? (
				<>
					<Skeleton
						animation="wave"
						variant="circular"
						width="17.5rem"
						height="17.5rem"
						style={{ margin: "0 auto 1rem" }}
					/>
					<div className="product-card-skeleton__container" style={{ flex: "1 1 auto", width: "100%" }}>
						<Skeleton animation="wave" variant="text" width="80%" style={{ margin: "0 auto" }} />
						<Skeleton animation="wave" variant="text" width="60%" style={{ margin: "0 auto 0.5rem" }} />
						<Skeleton animation="wave" variant="text" width="50%" style={{ margin: "0 auto 0.5rem" }} />
					</div>
					<Skeleton
						animation="wave"
						variant="rectangular"
						width="70%"
						height="2.5rem"
						style={{ margin: "0 auto 0.5rem", borderRadius: "1.25rem" }}
					/>
					<Skeleton
						animation="wave"
						variant="rectangular"
						width="85%"
						height="3.8rem"
						style={{ margin: "0 auto", borderRadius: "1.9rem" }}
					/>
				</>
			) : (
				<>
					<Skeleton
						animation="wave"
						variant="circular"
						width="23.5rem"
						height="23.5rem"
						style={{ margin: "0 auto 2rem" }}
					/>
					<div
						className="product-card-skeleton__content"
						style={{ display: "flex", flexDirection: "column", padding: "2rem 1.75rem", width: "100%" }}
					>
						<div className="product-card-skeleton__container" style={{ flex: "1 1 auto", width: "100%" }}>
							<Skeleton animation="wave" variant="text" width="100%" style={{ margin: "0 auto" }} />
							<Skeleton
								animation="wave"
								variant="text"
								width="80%"
								style={{ margin: "0 auto 1.75rem" }}
							/>
							<Skeleton animation="wave" variant="text" width="70%" style={{ margin: "0 auto 1rem" }} />
						</div>
						<Skeleton
							animation="wave"
							variant="rectangular"
							width="100%"
							height="3.8rem"
							style={{ margin: "0 auto", borderRadius: "1.9rem" }}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductCardSkeleton;
