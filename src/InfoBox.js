import React from 'react'
import {Card, CardContent, Typography } from "../node_modules/@material-ui/core"
function InfoBox({ title, cases, total}) {
    return (
        <Card className="infoBox">
            {/*Title**/}
            <Typography color="textSecondary" className="infoBox__title">
                {title}
            </Typography>

            <h2 className="infoBox__cases">{cases}</h2>

            <Typography color="textSecondary" className="infoBox__total">
                {total} Total
            </Typography>
            {/*Number of Cases */}
            {/*Total*/}
        </Card>
    )
}

export default InfoBox