
export interface protocol {
    phase: number;
    l7: string;
    portList: number[];
    l4: 'TCP' | "UDP" | 'TCP/UDP' 
}

export const layer7Protocols:protocol[] = [
    {phase: 1, l7: "FTP: File Transfer Protocol" , portList: [ 20,21 ], l4: "TCP"} ,
    {phase: 1, l7: "SSH/SCP/SFTP: Secure Shell" , portList: [22], l4: "TCP/UDP"} ,
    {phase: 1, l7: "Telnet" , portList: [23], l4: "TCP/UDP"} ,
    {phase: 1, l7: "SMTP: Simple Mail Transfer Protocol" , portList: [25], l4: "TCP"} ,
    {phase: 1, l7: "TACACS" , portList: [49], l4: "TCP"} ,
    {phase: 1, l7: "DNS: Domain Name Services" , portList: [53], l4: "TCP/UDP"} ,
    {phase: 1, l7: "DHCP: Dynamic Host Configuration Protocol" , portList: [67,68], l4: "UDP"} ,
    {phase: 1, l7: "TFTP: Trivial File Transfer Protocol" , portList: [69], l4: "UDP"} ,
    {phase: 2, l7: "HTTP: Hyper Text Transfer Protocol" , portList: [80], l4: "TCP"} ,
    {phase: 2, l7: "Kerberos" , portList: [88], l4: "TCP/UDP"} ,
    {phase: 2, l7: "Pop3: Post Office Protocol" , portList: [110], l4: "TCP"} ,
    {phase: 2, l7: "NNTP: Network News Transfer Protocol" , portList: [119], l4: "TCP"} ,
    {phase: 2, l7: "NTP: Network Time Protocol" , portList: [123], l4: "UDP"} ,
    {phase: 2, l7: "RPC/DCOM/SCM: Remote Procedure call" , portList: [135], l4: "TCP/UDP"} ,
    {phase: 2, l7: "NetBios/NetBT" , portList: [137,138,139], l4: "TCP/UDP"} ,
    {phase: 2, l7: "IMAP: Internet Message/Mail Access Protocol" , portList: [143], l4: "TCP"} ,
    {phase: 3, l7: "SNMP: Simple Network Management Protocol" , portList: [161], l4: "UDP"} ,
    {phase: 3, l7: "SNMP-TRAP" , portList: [162], l4: "TCP/UDP"} ,
    {phase: 3, l7: "LDAP: Lightweight Directory Access Protocol" , portList: [389], l4: "TCP/UDP"} ,
    {phase: 3, l7: "HTTPS: Secure" , portList: [443], l4: "TCP"} ,
    {phase: 3, l7: "SMB/CIFS: Server Message Block" , portList: [445], l4: "TCP"} ,
    {phase: 3, l7: "SMTP /w TLS" , portList: [ 465, 587 ], l4: "TCP"} ,
    {phase: 3, l7: "Syslog" , portList: [514], l4: "UDP"} ,
    {phase: 3, l7: "LDAP SSL/TLS" , portList: [636], l4: "TCP/UDP"} ,
    {phase: 4, l7: "ISCSI: IP SCSI" , portList: [860], l4: "TCP"} ,
    {phase: 4, l7: "FTPS: secure" , portList: [989,990], l4: "TCP"} ,
    {phase: 4, l7: "IMAP4 /w SSL/TLS" , portList: [993], l4: "TCP"} ,
    {phase: 4, l7: "Pop3 /w SSL/TLS" , portList: [995], l4: "TCP"} ,
    {phase: 4, l7: "MsSQL" , portList: [1433], l4: "TCP"} ,
    {phase: 4, l7: "Radius-TACACS" , portList: [1645, 1646], l4: "UDP"} ,
    {phase: 4, l7: "l2TP: Layer 2 Transfer Protocol" , portList: [1701], l4: "UDP"} ,
    {phase: 4, l7: "PPTP: Point to Point Tunneling Protocol" , portList: [1723], l4: "TCP/UDP"} ,
    {phase: 5, l7: "Radius: Remote Authentication Dial-In User Service" , portList: [1812,1813], l4: "UDP"} ,
    {phase: 5, l7: "mySQL" , portList: [3006], l4: "TCP"} ,
    {phase: 5, l7: "FCIP: Fiber Channel Over IP" , portList: [3225], l4: "TCP/UDP"} ,
    {phase: 5, l7: "ISCSI Target" , portList: [3260], l4: "TCP"} ,
    {phase: 5, l7: "RDP: Remote Desktop Protocol" , portList: [3389], l4: "TCP/UDP"} ,
    {phase: 5, l7: "Diameter: AAA Protocol like Radius" , portList: [3868], l4: "TCP"} ,
    {phase: 5, l7: "SRTP: Secure Real Time Protocol" , portList: [5004], l4: "TCP/UDP"} ,
    {phase: 5, l7: "Syslog over TLS" , portList: [6514], l4: "TCP"} ,
] 