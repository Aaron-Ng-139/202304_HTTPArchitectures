<?xml version = "1.0"?>

<!--Q7-->
<xsl:stylesheet version = "1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
    <xsl:output method = "html" doctype-system = "about:legacy-compat"/>
    <xsl:template match = "product">
        <html xmlns = "http://www.w3.org/1999/xhtml">
            <head>
                <meta charset = "utf-8"/>
                <title>Nutrition Facts for Grandma White's Cookies</title>
            </head>

            <body>
                <h1><xsl:value-of select = "product_name"/></h1>
                <table style = "border: 1px solid black;">
                    <thead>
                        <tr><th>Nutrition Facts</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Per <xsl:value-of select = "serving_size"/></td></tr>
                        <tr>
                            <td>Calories</td>
                            <td><xsl:value-of select = "nutrition_facts/calories"/></td>
                        </tr>
                        <tr>
                            <td>Fat Calories</td>
                            <td><xsl:value-of select = "nutrition_facts/fat_calories"/></td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td><xsl:value-of select = "nutrition_facts/fats"/></td>
                        </tr>
                        <tr>
                            <td>Saturated Fats</td>
                            <td><xsl:value-of select = "nutrition_facts/saturated_fats"/></td>
                        </tr>
                        <tr>
                            <td>Cholesterol</td>
                            <td><xsl:value-of select = "nutrition_facts/cholesterol"/></td>
                        </tr>
                        <tr>
                            <td>Sodium</td>
                            <td><xsl:value-of select = "nutrition_facts/sodium"/></td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td><xsl:value-of select = "nutrition_facts/carbohydrates"/></td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td><xsl:value-of select = "nutrition_facts/fiber"/></td>
                        </tr>
                        <tr>
                            <td>Sugars</td>
                            <td><xsl:value-of select = "nutrition_facts/sugars"/></td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td><xsl:value-of select = "nutrition_facts/protein"/></td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>