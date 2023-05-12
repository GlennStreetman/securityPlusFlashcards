
export interface protocol {
    phase: number;
    l7: string;
    portList: number[];
    l4: 'TCP' | "UDP" | 'TCP/UDP' 
}

export const layer7Protocols:protocol[] = [
    {phase: 1, l7: "FTP" , portList: [ 20,21 ], l4: "TCP"} ,
    {phase: 1, l7: "SSH/SCP/SFTP" , portList: [22], l4: "TCP/UDP"} ,
    {phase: 1, l7: "Telnet" , portList: [23], l4: "TCP/UDP"} ,
    {phase: 1, l7: "SMTP" , portList: [25], l4: "TCP"} ,
    {phase: 1, l7: "Radius" , portList: [49], l4: "TCP"} ,
    {phase: 1, l7: "DNS" , portList: [53], l4: "TCP/UDP"} ,
    {phase: 1, l7: "DHCP" , portList: [67,68], l4: "UDP"} ,
    {phase: 1, l7: "TFTP" , portList: [69], l4: "UDP"} ,
    {phase: 2, l7: "HTTP" , portList: [80], l4: "TCP"} ,
    {phase: 2, l7: "Kerberos" , portList: [88], l4: "TCP/UDP"} ,
    {phase: 2, l7: "Pop3" , portList: [110], l4: "TCP"} ,
    {phase: 2, l7: "NNTP" , portList: [119], l4: "TCP"} ,
    {phase: 2, l7: "NTP" , portList: [123], l4: "UDP"} ,
    {phase: 2, l7: "RPC/DCOM/SCM" , portList: [135], l4: "TCP/UDP"} ,
    {phase: 2, l7: "NetBios/NetBT" , portList: [137,138,139], l4: "TCP/UDP"} ,
    {phase: 2, l7: "IMAP" , portList: [143], l4: "TCP"} ,
    {phase: 3, l7: "SNMP" , portList: [161], l4: "UDP"} ,
    {phase: 3, l7: "SNMPTRAP" , portList: [162], l4: "TCP/UDP"} ,
    {phase: 3, l7: "LDAP" , portList: [389], l4: "TCP/UDP"} ,
    {phase: 3, l7: "HTTPS" , portList: [443], l4: "TCP"} ,
    {phase: 3, l7: "SMB/CIFS" , portList: [445], l4: "TCP"} ,
    {phase: 3, l7: "SMTP /w TLS" , portList: [ 465, 587 ], l4: "TCP"} ,
    {phase: 3, l7: "Syslog" , portList: [514], l4: "UDP"} ,
    {phase: 3, l7: "LDAP SSL/TLS" , portList: [636], l4: "TCP/UDP"} ,
    {phase: 4, l7: "ISCSI" , portList: [860], l4: "TCP"} ,
    {phase: 4, l7: "FTPS" , portList: [989,990], l4: "TCP"} ,
    {phase: 4, l7: "IMAP4 /w SSL/TLS" , portList: [993], l4: "TCP"} ,
    {phase: 4, l7: "Pop3 /w SSL/TLS" , portList: [995], l4: "TCP"} ,
    {phase: 4, l7: "MsSQL" , portList: [1433], l4: "TCP"} ,
    {phase: 4, l7: "Radius-TACACS" , portList: [1645, 1646], l4: "UDP"} ,
    {phase: 4, l7: "l2TP" , portList: [1701], l4: "UDP"} ,
    {phase: 4, l7: "PPTP" , portList: [1723], l4: "TCP/UDP"} ,
    {phase: 5, l7: "Radius" , portList: [1812,1813], l4: "UDP"} ,
    {phase: 5, l7: "mySQL" , portList: [3006], l4: "TCP"} ,
    {phase: 5, l7: "FCIP" , portList: [3225], l4: "TCP/UDP"} ,
    {phase: 5, l7: "ISCSI Target" , portList: [3260], l4: "TCP"} ,
    {phase: 5, l7: "RDP" , portList: [3389], l4: "TCP/UDP"} ,
    {phase: 5, l7: "Diameter" , portList: [3868], l4: "TCP"} ,
    {phase: 5, l7: "SRTP" , portList: [5004], l4: "TCP/UDP"} ,
    {phase: 5, l7: "Syslog over TLS" , portList: [6514], l4: "TCP"} ,
] 