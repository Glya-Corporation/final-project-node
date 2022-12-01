const row = product => {
    return `
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px;">
    <div style="color:#000000;font-size:14px;font-family:Lato, Tahoma, Verdana, Segoe, sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0px;mso-line-height-alt:16.8px;">
    <p style="margin: 0;">${product.item.name}</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px;">
    <div style="color:#000000;font-size:14px;font-family:Lato, Tahoma, Verdana, Segoe, sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0px;mso-line-height-alt:16.8px;">
    <p style="margin: 0;">${product.quantity}</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px;">
    <div style="color:#000000;font-size:14px;font-family:Lato, Tahoma, Verdana, Segoe, sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0px;mso-line-height-alt:16.8px;">
    <p style="margin: 0;"> $ ${product.price}</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    <td class="column column-4" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px;">
    <div style="color:#000000;font-size:14px;font-family:Lato, Tahoma, Verdana, Segoe, sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0px;mso-line-height-alt:16.8px;">
    <p style="margin: 0;"> $ ${product.price * product.quantity}</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    `
}

module.exports = row;