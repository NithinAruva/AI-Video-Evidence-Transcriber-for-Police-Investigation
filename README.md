# Market Research and Use-Case Generation Agent

The police investigation department frequently handles large volumes of video evidence, including CCTV footage, body cam recordings, and other visual data. 
Manually reviewing this video content is both time-intensive and prone to human error. 
I developed an AI-powered system designed to streamline this process by automatically transcribing video content and analyzing critical events to assist investigations.

## Features

- **Automated Video Transcription**: The system transcribes both audio and visual elements in video files. This includes converting speech to text and extracting text from visual cues such as license plates and signboards.
- **AContent Analysis for Key Events**: The system analyzes video content to identify suspicious activities and anomalies like unusual movements or potentially illegal actions. This reduces the manual workload and highlights key moments for investigators.
- **Case File Generation**: Extracted information is used to compile detailed case files. Each file includes suspect activities, relevant observations, and timestamped events, providing investigators with a structured summary.
- **User-Friendly Interface**: A streamlined UI allows the investigation team to review, adjust, and search AI-generated insights. This interface, developed using tools like Streamlit, delivers real-time system feedback and reference links, enhancing accessibility.
- **Question-Answer Bot (QA Bot)**: A Q&A bot lets users query specific details within the case file. This feature uses LLM-based search and refinement, ensuring accurate and contextually relevant answers for investigators’ queries.

